import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import app from "./app";

module.exports = combineReducers({
    app,
    form: formReducer
});
