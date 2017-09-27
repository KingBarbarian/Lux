import React from "react";
import { HashRouter, Route, browserHistory } from "react-router-dom";

import CreditContainer from "@/containers/creditContainer";
import CustomerSelectContainer from "@/containers/customerSelectContainer";
const routes = (
  <HashRouter history={browserHistory}>
    <div>
      <Route exact path="/select" component={CreditContainer} />
      <Route exact path="/" component={CustomerSelectContainer} />
    </div>
  </HashRouter>
);

export default routes;
