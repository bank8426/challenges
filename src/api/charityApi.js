import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_PATH + '/charities/';

/**
 * @summary fetch charities information from api
 * @return {object} Promise
 */
export function getCharities() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
