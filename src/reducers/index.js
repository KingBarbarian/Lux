import { combineReducers } from "redux";

module.exports = combineReducers({
  user: require("./user"),
  message: require("./message")
});
