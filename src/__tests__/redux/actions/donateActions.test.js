import * as types from '../../../redux/actions/actionTypes';
import * as donateActions from '../../../redux/actions/donateActions'

describe('updateTotalDonate', () => {
  it('should create a UPDATE_TOTAL_DONATE action', () => {
    //arrange
    const amount = 20
    const expectedAction = {
      type: types.UPDATE_TOTAL_DONATE,
      amount,
    };

    //act
    const action = donateActions.updateTotalDonate(amount);

    //assert
    expect(action).toEqual(expectedAction);
  });
});