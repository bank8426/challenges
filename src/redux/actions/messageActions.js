import * as types from './actionTypes';

/**
* Set message in the store.
* @redux
* @reduxActionCreator UPDATE_MESSAGE
* @param {string} message - message to display
*/
export function updateMessage(message) {
  return { type: types.UPDATE_MESSAGE, message };
}