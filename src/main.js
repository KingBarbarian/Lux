import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import rootSaga from "@/saga";
import reducer from "@/reducers";
import routers from "@/routers";

const sagaMiddleware = createSagaMiddleware();

let store;
if (
  !(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)
) {
  store = createStore(reducer, applyMiddleware(sagaMiddleware));
} else {
  store = createStore(
    reducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    ) //使用Redux DevTools浏览器插件调试redux
  );
}
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>{routers}</Provider>,
  document.getElementById("app")
);
