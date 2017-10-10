import Rx from "rxjs";
import { baseRequest } from "@/utils/axios";
import { getToken } from "@/reducers/selectors";
import { Message } from "@/actions";

// without succee and fail
export const simpleAjax = (action, store) => {
  const token = getToken(store.getState());
  const { endpoint, method, isFormData, host, data, timeout } = action;
  return Rx.Observable.fromPromise(
    baseRequest(data, endpoint, token, method, timeout, host, isFormData)
  );
};

export const simpleAjaxWithToken = action => {
  const { endpoint, method, isFormData, host, data, timeout } = action;
  return Rx.Observable.fromPromise(
    baseRequest(data, endpoint, null, method, timeout, host, isFormData)
  );
};

export const baseAjax = (action, store, SUCCESS, FAILURE) => {
  return simpleAjax(action, store)
    .map(response => ({
      ...action,
      type: SUCCESS,
      payload: response
    }))
    .catch(error => {
      let error$ = Rx.Observable.of({
        ...action,
        type: FAILURE,
        payload: error,
        error: true
      });
      return (
        error$
          .concat(Rx.Observable.of(Message.dismiss()))
          .concat(
            Rx.Observable.of(
              Message.show(error.message, Message.TYPE_ERROR)
            )
          )
          .concat(Rx.Observable.of(Message.dismiss()).delay(3000))
      );
    });
};

// successCB: successActions => Rx.Observable
// errorCB: errorActions => Rx.Observable
export const ajax = (type, action$, store) => (successCB, errorCB) => {
  return action$
    .ofType(type.REQUEST)
    .do(() => store.dispatch(Message.show("载入中", Message.TYPE_LOADING)))
    .mergeMap(action => {
      let origin$ = simpleAjax(action, store).map(response => ({
        ...action,
        type: type.SUCCESS,
        payload: response
      }));
      if (successCB) {
        origin$ = origin$.mergeMap(successCB);
      }
      return origin$
        .concat(Rx.Observable.of(Message.dismiss()))
        .catch(error => {
          let error$ = Rx.Observable.of({
            ...action,
            type: type.FAILURE,
            payload: error,
            error: true
          });
          if (errorCB) {
            error$ = error$.mergeMap(errorCB);
          }
          return (
            error$
              // 发生错误的时候少了一个dismiss，这里需要补上
              .concat(Rx.Observable.of(Message.dismiss()))
              .concat(
                Rx.Observable.of(
                  Message.show(error.message, Message.TYPE_ERROR)
                )
              )
              .concat(Rx.Observable.of(Message.dismiss()).delay(3000))
          );
        });
    });
};
