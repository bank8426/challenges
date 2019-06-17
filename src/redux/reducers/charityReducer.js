import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function charityReducer(state = initialState.charities, action) {
  switch (action.type) {
    case types.LOAD_CHARITIES_SUCCESS:
      return action.charities;
    default:
      return state;
  }
}
