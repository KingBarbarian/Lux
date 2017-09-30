import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

module.exports = combineReducers({
  user: require("./user"),
  message: require("./message"),
  paginate: require("./paginate"),
  form: formReducer
});
