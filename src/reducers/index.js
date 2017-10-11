import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import paginateReducer from "./paginate";

module.exports = combineReducers({
  user: require("./user"),
  message: require("./message"),
  paginate: paginateReducer,
  form: formReducer
});
