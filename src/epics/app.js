import { combineEpics } from "redux-observable";
import Rx from "rxjs";
import _ from "lodash";
import { simpleAjax, createErrorProcessStream } from "./tool";
import {
    app
} from "../actions";
const {ACTION_DEMO_GET} = app;
function actionDemoGet(action$, store) {
    return action$
        .ofType(ACTION_DEMO_GET.REQUEST)
        .do(() => console.log("hello"))
        .mergeMap(action => {
            return simpleAjax(action, store)
                .map(response => ({
                    action,
                    type: ACTION_DEMO_GET.SUCCESS,
                    payload: response
                }))
                .catch(error =>
                    createErrorProcessStream(action, ACTION_DEMO_GET.FAILURE, error)
                );
        })
        .do(() => console.log("hello end"));
}

export default combineEpics(
    actionDemoGet
);
