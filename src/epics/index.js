import { combineEpics } from "redux-observable";
import user from "./user";
import paginate from "./paginate";
import distributor from "./distributor";

export const rootEpic = combineEpics(user, paginate, distributor);
