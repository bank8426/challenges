import * as types from './actionTypes';

/**
* Increase total of donation in the store.
* @redux
* @reduxActionCreator UPDATE_TOTAL_DONATE
* @param {number} amount - amount of donation
*/
export function updateTotalDonate(amount) {
  return { type: types.UPDATE_TOTAL_DONATE, amount };
}