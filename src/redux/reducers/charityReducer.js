import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
   * Reducer for update charities information
   * @redux
   * @reduxReducer
   */
export default function charityReducer(state = initialState.charities, action) {
  switch (action.type) {
    case types.LOAD_CHARITIES_SUCCESS:
      return action.charities;
    default:
      return state;
  }
}
