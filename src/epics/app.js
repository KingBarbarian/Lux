import { combineEpics } from "redux-observable";
import Rx from "rxjs";
import _ from "lodash";
import { simpleAjax, createErrorProcessStream } from "./tool";
import {
    app
} from "../actions";
function actionDemoGet(action$, store) {
    return action$


}

export default combineEpics(
    actionDemoGet
);
