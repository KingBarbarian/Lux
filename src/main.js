import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Switch,
  HashRouter as Router
} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import routers from "@/routers";
import reducers from "@/reducers";

const store = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
    {routers}
  </Provider>,
  document.getElementById("app")
);
