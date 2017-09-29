import React from "react";
import { HashRouter, Route, browserHistory } from "react-router-dom";

import CreditContainer from "@/containers/creditContainer";
import CustomerSelectContainer from "@/containers/customerSelectContainer";
const routes = (
  <HashRouter history={browserHistory}>
    <div>
      <Route exact path="/" component={CreditContainer} />
      <Route exact path="/select" component={CustomerSelectContainer} />
    </div>
  </HashRouter>
);

export default routes;
