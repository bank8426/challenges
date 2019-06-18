import * as types from '../../../redux/actions/actionTypes'
import reducer from '../../../redux/reducers/charityReducer'

describe('charityReducer', () => {
  it('should return initial state',() => {
    expect(reducer(undefined,{})).toEqual([])
  })

  it('should handle LOAD_CHARITIES_SUCCESS',() => {
    const charities = [{
      id: 1,
      name: 'Baan Kru Noi',
      image: 'baan-kru-noi.jpg',
      currency: 'THB',
    }]
    expect(reducer([],{type : types.LOAD_CHARITIES_SUCCESS , charities})).toEqual([{
      id: 1,
      name: 'Baan Kru Noi',
      image: 'baan-kru-noi.jpg',
      currency: 'THB',
    }]
    )
  })
})
