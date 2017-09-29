import {
    ACTION_DEMO_GET
} from "../actions";

const defaultState = {
    todoInfo: {
        items: [],
        isRefreshing: false
    }
};

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_DEMO_GET.REQUEST:
            return {
                state,
                todoInfo: {}
            };
        default:
            return state;
    }
};

export default appReducer;
