import * as types from './actionTypes';

/**
* Set message in the store.
* @redux
* @reduxActionCreator ADD_MESSAGE
* @param {string} message - add message to display
* @param {number} timespan - millisecond that message display
* @param {number} id - message id
*/
export function addMessage(message, id) {
  return { type: types.ADD_MESSAGE , message ,id };
}

/**
* Remove message from the store.
* @redux
* @reduxActionCreator REMOVE_MESSAGE_BY_ID
* @param {number} id - message id
*/
export function removeMessageById(id) {
  return { type: types.REMOVE_MESSAGE_BY_ID ,id };
}