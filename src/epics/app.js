import { combineEpics } from "redux-observable";
import Rx from "rxjs";
import _ from "lodash";
import {
    ACTION_DEMO
} from "Thrall/src/actions";
import { simpleAjax, createErrorProcessStream } from "./tool";

export const actionDemoGet = (action$, store) =>
    action$
        .ofType(ACTION_DEMO.REQUEST)
        .do(() => console.log("hello"))
        .mergeMap(action => {
            return simpleAjax(action, store)
                .map(response => ({
                    ...action,
                    type: ACTION_DEMO.SUCCESS,
                    payload: response
                }))
                .catch(error =>
                    createErrorProcessStream(action, SCHEDULE_PAGING_QUERY.FAILURE, error)
                );
        })
        .do(() => console.log("hello end"));

export default combineEpics(
    actionDemoGet
);
