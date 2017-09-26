import React from "react";
import { HashRouter, Route, browserHistory } from "react-router-dom";

import CreditContainer from "@/containers/creditContainer";
const routes = (
  <HashRouter history={browserHistory}>
    <div>
      <Route exact path="/" component={CreditContainer} />
    </div>
  </HashRouter>
);

export default routes;
