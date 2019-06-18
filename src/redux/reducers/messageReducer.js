import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
   * Reducer for update message
   * @redux
   * @reduxReducer
   */
export default function messageReducer(state = initialState.message, action) {
  switch (action.type) {
    case types.UPDATE_MESSAGE:
      return action.message
    default: return state;
  }
}