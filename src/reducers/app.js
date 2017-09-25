"use strict";

import {
    ACTION_DEMO
} from "../actions";

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_DEMO.REQUEST:
            return {
                state,
                appInfo: Object.assign(
                    {},
                    action.payload.data
                )
            };
        default:
            return state;
    }
};

export default appReducer;
