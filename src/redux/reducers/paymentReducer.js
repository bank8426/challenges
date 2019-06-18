import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
   * Reducer for update payments information
   * @redux
   * @reduxReducer
   */
export default function paymentReducer(state = initialState.payments, action) {
  switch (action.type) {
    case types.LOAD_PAYMENTS_SUCCESS:
      return action.payments;
    default:
      return state;
  }
}
