import { combineReducers } from 'redux';
import donate from './donateReducer';
import message from './messageReducer';

const rootReducer = combineReducers({
  donate,
  message,
});

export default rootReducer;
