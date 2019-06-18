import * as types from '../../../redux/actions/actionTypes'
import reducer from '../../../redux/reducers/messageReducer'

describe('messageReducer', () => {
  it('should return initial state',() => {
    expect(reducer(undefined,{})).toEqual('')
  })

  it('should handle UPDATE_MESSAGE',() => {
    const message = 'Hello';
    expect(reducer([],{type : types.UPDATE_MESSAGE ,message})).toEqual('Hello')
  })
})
