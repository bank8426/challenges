import * as types from '../../../redux/actions/actionTypes'
import reducer from '../../../redux/reducers/messageReducer'

describe('messageReducer', () => {
  it('should return initial state',() => {
    expect(reducer(undefined,{})).toEqual([])
  })

  it('should handle ADD_MESSAGE',() => {
    const message = 'Hello';
    const id = 1;
    const expected = [
      { 
        message : 'Hello',
        id : 1,
      },
    ]
    expect(reducer([],{type : types.ADD_MESSAGE ,message,id})).toEqual(expected)
  })
})
