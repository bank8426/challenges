import * as types from '../../../redux/actions/actionTypes';
import * as messageActions from '../../../redux/actions/messageActions'

describe('addMessage', () => {
  it('should create a ADD_MESSAGE action', () => {
    //arrange
    const message = 'Thank for donation'
    const id = 1
    const expectedAction = {
      type: types.ADD_MESSAGE,
      message,id,
    };
    
    //act
    const action = messageActions.addMessage(message,id);
    
    //assert
    expect(action).toEqual(expectedAction);
  });
})

describe('removeMessageById', () => {
  it('should create a REMOVE_MESSAGE_BY_ID action', () => {
    //arrange
    const id = 1
    const expectedAction = {
      type: types.REMOVE_MESSAGE_BY_ID,
      id,
    };
    
    //act
    const action = messageActions.removeMessageById(id);
    
    //assert
    expect(action).toEqual(expectedAction);
  });
})
