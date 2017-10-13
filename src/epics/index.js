import { combineEpics } from "redux-observable";
import user from "./user";
import paginate from "./paginate";
import credit from "./credit";

export const rootEpic = combineEpics(user, paginate, credit);
