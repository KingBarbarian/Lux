import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routers from "@/routers";
import configureStore from "./stores/configureStore";
import { AppContainer } from "react-hot-loader";

const render = Component => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById("app")
  );
};

render(Routers);

if (module.hot) {
  const NextApp = require("@/routers").default;
  module.hot.accept("@/routers", () => {
    render(NextApp);
  });
}
