import * as types from './actionTypes';
import * as paymentApi from '../../api/paymentApi';
import { beginApiCall, apiCallError } from './apiStatusActions';
import { updateTotalDonate } from './donateActions';
import { updateMessage} from './messageAction';
import { summaryDonations } from '../../helpers';
export function loadPaymentsSuccess(payments) {
  return { type: types.LOAD_PAYMENTS_SUCCESS, payments };
}

export function loadPayments() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return paymentApi
      .getPayments()
      .then(payments => {
        dispatch(loadPaymentsSuccess(payments));
        dispatch(updateTotalDonate(summaryDonations(payments.map((item) => (item.amount)))));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function savePayments(id, amount, currency) {
  return function(dispatch) {
    return paymentApi
      .savePayments({ charitiesId: id, amount, currency })
      .then(function() {
        dispatch(updateTotalDonate(amount));
        dispatch(updateMessage(`Thanks for donate ${amount}!`));
        setTimeout(function() {
          dispatch(updateMessage(''));
        }, 2000);
      });
  };
}