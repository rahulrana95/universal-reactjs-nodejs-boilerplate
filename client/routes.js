import React from 'react';
import { Provider } from 'redux';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import App from './components/App';
import { createStore, combineReducers } from 'redux';

let RouterConfig = () =>
<Router history={browserHistory}  >
  <Route path="/" component={App}>

  </Route>
</Router>


module.exports = RouterConfig;
