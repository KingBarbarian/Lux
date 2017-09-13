import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import AppContainer from "@/containers/AppContainer";
import HomeContainer from "@/containers/HomeContainer";
import NoMatchContainer from "@/containers/NoMatchContainer";
const routes = (
  <HashRouter>
    <AppContainer>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route component={NoMatchContainer} />
      </Switch>
    </AppContainer>
  </HashRouter>
);

export default routes;
