import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function donateReducer(state = initialState.donate, action) {
  switch (action.type) {
    case types.UPDATE_TOTAL_DONATE:
      return state + action.amount
    default: return state;
  }
}