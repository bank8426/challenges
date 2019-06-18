import * as types from '../../../redux/actions/actionTypes'
import reducer from '../../../redux/reducers/paymentReducer'

describe('paymentReducer', () => {
  it('should return default state',() => { 
    expect(reducer(undefined,{})).toEqual([])
  })

  it('should handle LOAD_PAYMENTS_SUCCESS',() => { 
    const payments = [{
      charitiesId: 2,
      amount: 10,
      currency: 'THB',
      id: 1,
    }]
    expect(reducer([],{ type : types.LOAD_PAYMENTS_SUCCESS,payments})).toEqual([{
      charitiesId: 2,
      amount: 10,
      currency: 'THB',
      id: 1,
    }])
  })
})
