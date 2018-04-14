import React from 'react';
import store from './store.js';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import { createStore, combineReducers } from 'redux';

import App from './components/App';


let RouterConfig = () =>
<Provider store={store}>
  <Router history={browserHistory}  >
    <Route path="/" component={App}>
    </Route>
  </Router>
</Provider>

module.exports = RouterConfig;
