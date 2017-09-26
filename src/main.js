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
import configureStore from "./stores/configureStore";

ReactDOM.render(
  <Provider store={configureStore()}>
    {routers}
  </Provider>,
  document.getElementById("app")
);
