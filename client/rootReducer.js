import { combineReducers } from 'redux';
import loginSignupReducer from './components/LoginSignup/LoginSignupReducer.js';
function test(state={'name':'rana'},action){
    return state;
}
const rootReducer  = combineReducers({
  loginSignupReducer,
  test
});

export default rootReducer;