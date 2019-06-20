import { combineReducers } from 'redux';
import donate from './donateReducer';
import messages from './messageReducer';
import apiCallsInProgress from './apiStatusReducer';
import charities from './charityReducer';
import payments from './paymentReducer';
 
//bundle all reducer
const rootReducer = combineReducers({
  donate,
  messages,
  apiCallsInProgress,
  charities,
  payments,
});

export default rootReducer;
