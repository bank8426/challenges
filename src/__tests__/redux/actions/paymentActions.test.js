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
    it('should create BEGIN_API_CALL, LOAD_PAYMENTS_SUCCESS and UPDATE_TOTAL_DONATE when loading payments', () => {
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
      store.dispatch(paymentActions.loadPayments()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should create BEGIN_API_CALL and API_CALL_ERROR when loading payments fail', async () => {
      fetchMock.mock('*', 404);
      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.API_CALL_ERROR },
      ];

      const store = mockStore({ charities: [] });
      try {
        await store.dispatch(paymentActions.loadPayments())
      }
      catch (e) {
      
      }
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Save payments Thunk', () => {
    jest.useFakeTimers();
    it('should create UPDATE_TOTAL_DONATE , ADD_MESSAGE and REMOVE_MESSAGE_BY_ID when savePayment', () => {
      const charityId = 1
      const id = 1;
      const amount = 10
      const currency = 'THB'
      const message = `Thanks for donate ${amount} ${currency}!`
      const expectedActions = [
        {type : types.UPDATE_TOTAL_DONATE , amount},
        {type : types.ADD_MESSAGE , message , id},
        {type : types.REMOVE_MESSAGE_BY_ID , id},
      ];
      
      fetchMock.mock('*', {
        body: {id,message},
        headers: { 'content-type': 'application/json' },
      });

      const store = mockStore({ payments: [] });
      store.dispatch(paymentActions.savePayment(charityId,amount,currency)).then(() => {
        jest.runAllTimers()
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});