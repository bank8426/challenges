import * as types from '../../../redux/actions/actionTypes';
import * as messageActions from '../../../redux/actions/messageActions'

describe('updateMessage', () => {
  it('should create a UPDATE_MESSAGE action', () => {
    //arrange
    const message = 'Thank for donation'
    const expectedAction = {
      type: types.UPDATE_MESSAGE,
      message,
    };
    
    //act
    const action = messageActions.updateMessage(message);
    
    //assert
    expect(action).toEqual(expectedAction);
  });
})
