import * as types from './actionTypes';
import * as paymentApi from '../../api/paymentApi';
import { beginApiCall, apiCallError } from './apiStatusActions';
import { updateTotalDonate } from './donateActions';
import { updateMessage} from './messageActions';
import { summaryDonations } from '../../helpers';

/**
* Sets payments information to the store.
* @redux
* @reduxActionCreator LOAD_PAYMENTS_SUCCESS
* @param {array} payments - array of payments object
*/
export function loadPaymentsSuccess(payments) {
  return { type: types.LOAD_PAYMENTS_SUCCESS, payments };
}

/**
* Make api call to get payments information and update payments in store.
* @redux
*/
export function loadPayments() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return paymentApi
      .getPayments()
      .then(payments => {
        dispatch(loadPaymentsSuccess(payments));
        //summary all payments before update total donation
        dispatch(updateTotalDonate(summaryDonations(payments.map((item) => (item.amount)))));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

/**
* Make api call to save new payment information ,
* update total donations and show message.
* @redux
* @param {number} id - charity id
* @param {number} amount - donate amount 
* @param {string} currency - country currency
*/
export function savePayment(id, amount, currency) {
  return function(dispatch) {
    return paymentApi
      .savePayment({ charitiesId: id, amount, currency })
      .then(function() {
        dispatch(updateTotalDonate(amount));
        dispatch(updateMessage(`Thanks for donate ${amount}!`));
        setTimeout(function() {
          dispatch(updateMessage(''));
        }, 2000);
      });
  };
}