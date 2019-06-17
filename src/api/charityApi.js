import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_PATH + '/charities/';

export function getCharities() {
  console.log(baseUrl)
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
