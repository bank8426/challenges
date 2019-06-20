import * as types from '../../../redux/actions/actionTypes';
import * as charityActions from '../../../redux/actions/charityActions';
import { charities } from '../../../../tools/mockData';
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

  describe('Load charities Thunk', () => {
    it('should create BEGIN_API_CALL and LOAD_CHARITIES_SUCCESS when loading charities', () => {
      fetchMock.mock('*', {
        body: charities,
        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_CHARITIES_SUCCESS, charities },
      ];

      const store = mockStore({ charities: [] });
      store.dispatch(charityActions.loadCharities()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should create BEGIN_API_CALL and API_CALL_ERROR when loading charities fail', async () => {
      fetchMock.mock('*', 404);
      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.API_CALL_ERROR },
      ];

      const store = mockStore({ charities: [] });
      try {
        await store.dispatch(charityActions.loadCharities())
      }
      catch (e) {
      
      }
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
