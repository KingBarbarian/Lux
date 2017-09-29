import { combineEpics } from "redux-observable";
import user from "./user";

export const rootEpic = combineEpics(user);
