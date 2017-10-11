import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routers from "@/routers";
import configureStore from "./stores/configureStore"

ReactDOM.render(
  <Provider store={configureStore()}>
    <Routers />
  </Provider>,
  document.getElementById("app")
);
