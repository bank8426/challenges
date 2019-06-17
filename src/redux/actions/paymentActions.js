import * as types from './actionTypes';
import * as paymentApi from '../../api/paymentApi';
import { beginApiCall, apiCallError } from './apiStatusActions';
import { summaryDonations } from '../../helpers';
export function loadPaymentsSuccess(payments) {
  return { type: types.LOAD_PAYMENTS_SUCCESS, payments };
}

export function updateTotalDonate(payments) {
  return { type: types.UPDATE_TOTAL_DONATE, amount: summaryDonations(payments.map((item) => (item.amount))) };
}

export function loadPayments() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return paymentApi
      .getPayments()
      .then(payments => {
        dispatch(loadPaymentsSuccess(payments));
        dispatch(updateTotalDonate(payments));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
