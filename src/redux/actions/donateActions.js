import * as types from './actionTypes';

export function updateTotalDonate(amount) {
  return { type: types.UPDATE_TOTAL_DONATE, amount };
}