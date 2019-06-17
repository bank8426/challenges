import { combineReducers } from 'redux';
import donate from './donateReducer';
import message from './messageReducer';
import apiCallsInProgress from './apiStatusReducer';
import charities from './charityReducer';
 
const rootReducer = combineReducers({
  donate,
  message,
  apiCallsInProgress,
  charities,
});

export default rootReducer;
