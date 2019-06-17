import * as types from './actionTypes';
import * as charityApi from '../../api/charityApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadCharitiesSuccess(charities) {
  return { type: types.LOAD_CHARITIES_SUCCESS, charities };
}

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
