import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './rootReducer';

let middleware = applyMiddleware(thunk,logger);
let store = createStore(rootReducer,middleware);

export default store;