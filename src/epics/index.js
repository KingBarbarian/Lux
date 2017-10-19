import { combineEpics } from "redux-observable";
import paginate from "./paginate";
import credit from "./credit";

export const rootEpic = combineEpics(paginate, credit);
