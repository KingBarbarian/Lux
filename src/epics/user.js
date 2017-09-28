import { combineEpics } from "redux-observable";
import Rx from "rxjs";
import { User } from "@/actions";
const getToken = (action$, store) => {
  if ("开发中") {
    console.log(User.USER_TOKEN);
    return action$.ofType("USER_TOKEN_REQUEST").mergeMap(action => {
      return Rx.Observable.of({
        type: User.USER_TOKEN.SUCCESS,
        payload: "czxczxczxczxc"
      });
    });
  } else {
  }
};

export default combineEpics(getToken);
