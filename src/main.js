import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Switch,
  HashRouter as Router
} from "react-router-dom";

import AppContainer from "@/containers/AppContainer";
import NextContainer from "@/containers/NextContainer";
import routers from "@/routers";

ReactDOM.render(
  routers,
  document.getElementById("app")
);
