import * as types from '../../../redux/actions/actionTypes'
import reducer from '../../../redux/reducers/donateReducer'

describe('donateReducer', () => {
  it('should return initial state',() => {
    expect(reducer(undefined,{})).toEqual(0)
  })

  it('should handle LOAD_CHARITIES_SUCCESS',() => {
    const amount = 10;
    expect(reducer([],{type : types.UPDATE_TOTAL_DONATE ,amount})).toEqual(10)
  })
})
