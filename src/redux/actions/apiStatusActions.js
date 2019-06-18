import * as types from './actionTypes';

/**
* Increase number of apiCallsInProgress in store when start call API.
* @redux
* @reduxActionCreator BEGIN_API_CALL
*/
export function beginApiCall() {
  return { type: types.BEGIN_API_CALL };
}

/**
* Decrease number of apiCallsInProgress in store when error.
* @redux
* @reduxActionCreator API_CALL_ERROR
*/
export function apiCallError() {
  return { type: types.API_CALL_ERROR };
}
