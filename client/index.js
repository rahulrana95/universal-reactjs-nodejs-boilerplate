import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />,document.getElementById("app"));

if(module.hot !== undefined){
    console.log(module);
    module.hot.accept();
}

