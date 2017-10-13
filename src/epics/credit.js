import { combineEpics } from "redux-observable";
import Rx from "rxjs";
import _ from "lodash";
import { CREDIT_ADD, Message } from "@/actions";
import { simpleAjax } from "./tools";

export const creditAdd = (action$, store) =>
  action$
    .ofType(CREDIT_ADD.REQUEST)
    .do(() => store.dispatch(Message.show("新增中", Message.TYPE_LOADING)))
    .mergeMap(action => {
      return simpleAjax(action, store)
        .map(response => ({
          ...action,
          type: CREDIT_ADD.SUCCESS,
          payload: response
        }))
        .concat()
        .catch(error => {
          let error$ = Rx.Observable.of({
            ...action,
            type: CREDIT_ADD.SUCCESS,
            payload: error,
            error: true
          });
          return error$
            .concat(Rx.Observable.of(Message.dismiss()))
            .concat(
              Rx.Observable.of(Message.show(error.message, Message.TYPE_ERROR))
            )
            .concat(Rx.Observable.of(Message.dismiss()).delay(3000));
        });
    })
    .do(() => store.dispatch(Message.dismiss()));

export default combineEpics(creditAdd);
