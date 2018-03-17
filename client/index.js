import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import RouterConfig from './routes';
import App from './components/App';

render(<RouterConfig />,document.getElementById("app"));

  if (module.hot){
     module.hot.accept();
     console.log('module hot.........');

  }
