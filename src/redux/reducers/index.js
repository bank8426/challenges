import { combineReducers } from 'redux';
import donate from './donateReducer';
import message from './messageReducer';
import apiCallsInProgress from './apiStatusReducer';
import charities from './charityReducer';
import payments from './paymentReducer';
 
const rootReducer = combineReducers({
  donate,
  message,
  apiCallsInProgress,
  charities,
  payments,
});

export default rootReducer;
