import { combineEpics } from "redux-observable";
import { User } from "@/actions";

const getTokenFaild = action$ =>
  action$
    .ofType(User.USER_TOKEN.FAILURE)
    .delay(2000)
    .mapTo(User.getToken());

export default combineEpics(getTokenFaild);
