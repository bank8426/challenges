import * as types from './actionTypes';

export function updateMessage(message) {
  return { type: types.UPDATE_MESSAGE, message };
}