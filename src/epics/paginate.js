import Rx from "rxjs";
import { combineEpics } from "redux-observable";
import {
  Message,
  PAGINATE_INIT,
  PAGINATE_REFRESH,
  PAGINATE_RESET,
  PAGINATE_LOAD_NEXT,
  PAGINATE_CHANGE_STATE
} from "@/actions";
import { createPaginateSelector } from "@/reducers/selectors";
import { baseAjax } from "./tools";

export const isPaginateProcessing = (action, store) => {
  const paginateSelector = createPaginateSelector(action.target);
  const { isFetching, isRefreshing } = paginateSelector(store.getState());
  return !isFetching && !isRefreshing;
};
export const isPaginateReachEnd = (action, store) => {
  const paginateSelector = createPaginateSelector(action.target);
  const { isReachEnd } = paginateSelector(store.getState());
  return !isReachEnd;
};
export const paginateInit = (action$, store) =>
  action$
    .ofType(PAGINATE_INIT.REQUEST)
    .filter(action => {
      return isPaginateProcessing(action, store);
    })
    .mergeMap(action => {
      store.dispatch({
        type: PAGINATE_CHANGE_STATE,
        target: action.target,
        payload: {
          isRefreshing: true,
          isFetching: false
        }
      });
      return baseAjax(action, store, PAGINATE_INIT.SUCCESS, PAGINATE_INIT.FAILURE);
    })
    .do(() => store.dispatch(Message.dismiss()));

export const paginateRefresh = (action$, store) =>
  action$
    .ofType(PAGINATE_REFRESH.REQUEST)
    .filter(action => {
      return isPaginateProcessing(action, store);
    })
    .mergeMap(action => {
      store.dispatch({
        type: PAGINATE_CHANGE_STATE,
        target: action.target,
        payload: {
          isRefreshing: true,
          isFetching: false
        }
      });
      return baseAjax(
        action,
        store,
        PAGINATE_REFRESH.SUCCESS,
        PAGINATE_REFRESH.FAILURE
      );
    })
    .do(() => store.dispatch(Message.dismiss()));

export const paginateReset = (action$, store) =>
  action$
    .ofType(PAGINATE_RESET.REQUEST)
    .filter(action => {
      return isPaginateProcessing(action, store);
    })
    .mergeMap(action => {
      store.dispatch({
        type: PAGINATE_CHANGE_STATE,
        target: action.target,
        payload: {
          isRefreshing: true,
          isFetching: false
        }
      });
      return baseAjax(
        action,
        store,
        PAGINATE_RESET.SUCCESS,
        PAGINATE_RESET.FAILURE
      );
    })
    .do(() => store.dispatch(Message.dismiss()));

export const paginateLoadNext = (action$, store) =>
  action$
    .ofType(PAGINATE_LOAD_NEXT.REQUEST)
    .filter(action => isPaginateReachEnd(action, store))
    .filter(action => isPaginateProcessing(action, store))
    .map(action => {
      // next page
      const paginateSelector = createPaginateSelector(action.target);
      const startIndex = paginateSelector(store.getState()).entities.length;
      return {
        ...action,
        data: {
          ...action.data,
          startIndex
        }
      };
    })
    .mergeMap(action => {
      store.dispatch({
        type: PAGINATE_CHANGE_STATE,
        target: action.target,
        payload: {
          isRefreshing: false,
          isFetching: true
        }
      });
      return baseAjax(
        action,
        store,
        PAGINATE_LOAD_NEXT.SUCCESS,
        PAGINATE_LOAD_NEXT.FAILURE
      );
    })
    .do(() => store.dispatch(Message.dismiss()));

export const paginate = (action$, store) => {
  let paginate$ = action$.filter(action => {
    switch (action.type) {
      case PAGINATE_INIT.REQUEST:
      case PAGINATE_REFRESH.REQUEST:
      case PAGINATE_LOAD_NEXT.REQUEST:
      case PAGINATE_RESET.REQUEST:
        return true;
      default:
        return false;
    }
  });
  let init$ = paginateInit(paginate$, store);
  let refresh$ = paginateRefresh(paginate$, store);
  let loadNext$ = paginateLoadNext(paginate$, store);
  let reset$ = paginateReset(paginate$, store);

  return Rx.Observable.merge(init$, refresh$, loadNext$, reset$, 4);
  // init$.merge(refresh$).merge(loadNext$).merge(reset$)
};

export default combineEpics(paginate);
