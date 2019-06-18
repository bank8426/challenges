import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * @summary check dispatched action is end with '_SUCCESS' or not 
 * @param {string} type - string of action type
 * @return {boolean} boolean of result
 */
function actionTypeEndsInSuccess(type) {
  return (type === undefined) ? false : (type.substring(type.length - 8) === '_SUCCESS');
}

/**
   * Reducer for update number of api call in progress
   * @redux
   * @reduxReducer
   */
export default function apiCallStatusReducer(state = initialState.apiCallsInProgress,action) {
  if (action.type == types.BEGIN_API_CALL) {
    return parseInt(state + 1);
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}
