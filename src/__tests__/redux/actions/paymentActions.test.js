import * as types from '../../../redux/actions/actionTypes';
import * as paymentActions from '../../../redux/actions/paymentActions';
import { summaryDonations } from '../../../helpers'
import { payments } from '../../../../tools/mockData';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('Load payments Thunk', () => {
    it('should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading payments', () => {
      fetchMock.mock('*', {
        body: payments,
        headers: { 'content-type': 'application/json' },
      });

      const amount = summaryDonations(payments.map((item) => (item.amount)))
      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_PAYMENTS_SUCCESS, payments },
        { type: types.UPDATE_TOTAL_DONATE, amount},
      ];
      
      const store = mockStore({ payments: [] });
      return store.dispatch(paymentActions.loadPayments()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Save payments Thunk', () => {
    it('should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading paymentsxxxxxxxxxxxxxxxx', () => {
      fetchMock.mock('*', {
        body: payments,
        headers: { 'content-type': 'application/json' },
      });

      const charityId = 1
      const amount = 10
      const currency = 'THB'
      const message = `Thanks for donate ${amount}!`
      const expectedActions = [
        {type : types.UPDATE_TOTAL_DONATE , amount},
        {type : types.UPDATE_MESSAGE , message},
      ];
      
      const store = mockStore({ payments: [] });
      return store.dispatch(paymentActions.savePayment(charityId,amount,currency)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});