import * as types from './actionTypes';

/**
* Set message in the store.
* @redux
* @reduxActionCreator ADD_MESSAGE
* @param {string} message - add message to display
* @param {number} timespan - millisecond that message display
* @param {number} id - message id
* @param {boolean} isErrorMessage - boolean indicate error message
*/
export function addMessage(message, id , isErrorMessage=false) {
  return { type: types.ADD_MESSAGE , message ,id ,isErrorMessage };
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