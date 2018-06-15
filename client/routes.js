import React from "react";
import store from "./store.js";
import {Provider} from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {createStore, combineReducers} from "redux";

import App from "./components/App";


const RouterConfig = () =>
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} />
    </Router>
  </Provider>;

module.exports = RouterConfig;
