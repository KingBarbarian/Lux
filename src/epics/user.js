import { combineEpics } from "redux-observable";
import Rx from "rxjs";
import { User } from "@/actions";
import { ajax } from "./tools";
import { requestToken } from "../utils/bridge";
import { TOKEN } from "@/config";

const getToken = action$ =>
  action$.ofType(User.USER_TOKEN.REQUEST).mergeMap(action => {
    if (TOKEN)
      return Rx.Observable.of({
        type: User.USER_TOKEN.SUCCESS,
        payload: TOKEN
      });
    return Rx.Observable
      .fromPromise(requestToken())
      .timeout(2000)
      .map(response => {
        if (response) {
          return {
            type: User.USER_TOKEN.SUCCESS,
            payload: response
          };
        } else {
          return {
            type: User.USER_TOKEN.FAILURE
          };
        }
      })
      .catch(error => {
        return Rx.Observable.of({
          type: User.USER_TOKEN.FAILURE
        });
      });
  });

const getTokenFaild = action$ =>
  action$
    .ofType(User.USER_TOKEN.FAILURE)
    .delay(2000)
    .mapTo(User.getToken());

export default combineEpics(getToken, getTokenFaild);
