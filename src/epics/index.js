import { combineEpics } from "redux-observable";
import app from "./app";

export const rootEpic = combineEpics(
  app
);
