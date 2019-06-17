import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_PATH + '/charities/';

export function getCharities() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
