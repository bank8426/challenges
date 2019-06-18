import reducer from '../../../redux/reducers/apiStatusReducer'
import * as types from '../../../redux/actions/actionTypes'

describe('apiStatusReducer', () => {
  it('should return initial state',() => {
    expect(reducer(undefined,{})).toEqual(0)
  })

  it('should handle BEGIN_API_CALL',() => {
    expect(reducer([],{type : types.BEGIN_API_CALL})).toEqual(1)
  })

  it('should handle API_CALL_ERROR',() => {
    expect(reducer([],{type : types.API_CALL_ERROR})).toEqual(-1)
  })

  it('should handle LOAD_CHARITIES_SUCCESS',() => {
    expect(reducer([],{type : types.LOAD_CHARITIES_SUCCESS})).toEqual(-1)
  })

  it('should handle LOAD_PAYMENTS_SUCCESS',() => {
    expect(reducer([],{type : types.LOAD_PAYMENTS_SUCCESS})).toEqual(-1)
  })
})
