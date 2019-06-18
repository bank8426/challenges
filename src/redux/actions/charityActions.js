import * as types from './actionTypes';
import * as charityApi from '../../api/charityApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

/**
* Sets charities information to the store.
* @redux
* @reduxActionCreator LOAD_CHARITIES_SUCCESS
* @param {array} charities - array of charities object
*/
export function loadCharitiesSuccess(charities) {
  return { type: types.LOAD_CHARITIES_SUCCESS, charities };
}

/**
* Make api call to get charities information and update charities in store.
* @redux
*/
export function loadCharities() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return charityApi
      .getCharities()
      .then(charities => {
        dispatch(loadCharitiesSuccess(charities));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
