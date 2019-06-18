import * as types from '../../../redux/actions/actionTypes';
import * as apiStatusActions from '../../../redux/actions/apiStatusActions';

describe('beginApiCall', () => {
  it('should create a BEGIN_API_CALL action', () => {
    //arrange
    const expectedAction = {
      type: types.BEGIN_API_CALL,
    };

    //act
    const action = apiStatusActions.beginApiCall();

    //assert
    expect(action).toEqual(expectedAction);
  });
});

describe('apiCallError', () => {
  it('should create a API_CALL_ERROR action', () => {
    //arrange
    const expectedAction = {
      type: types.API_CALL_ERROR,
    };

    //act
    const action = apiStatusActions.apiCallError();

    //assert
    expect(action).toEqual(expectedAction);
  });
});

