import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

export default store;