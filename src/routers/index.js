import React from "react";
import { HashRouter, Route, browserHistory } from "react-router-dom";

import AppContainer from "@/containers/AppContainer";
import NextContainer from "@/containers/NextContainer";
const routes = (
  <HashRouter history={browserHistory}>
    <div>
      <Route exact path="/" component={AppContainer} />
      <Route path="/next" component={NextContainer} />
    </div>
  </HashRouter>
);

export default routes;
