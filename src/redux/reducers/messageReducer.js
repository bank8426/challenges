import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
   * Reducer for update message
   * @redux
   * @reduxReducer
   */
export default function messageReducer(state = initialState.messages, action) {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return [...state, {id : action.id, message : action.message}]
    case types.REMOVE_MESSAGE_BY_ID:
      return state.filter(message => message.id !== action.id )
    default: return state;
  }
}