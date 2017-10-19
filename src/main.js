import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routers from "@/routers";
import configureStore from "./stores/configureStore";
import { AppContainer } from "react-hot-loader";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("app")
  );
};

render(Routers);

if (module.hot) {
  module.hot.accept();
}
