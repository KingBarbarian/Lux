import { combineEpics } from "redux-observable";
import user from "./user";
import paginate from "./paginate";

export const rootEpic = combineEpics(user,paginate);
