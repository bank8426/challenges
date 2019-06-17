import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_PATH + '/payments/';

export function getPayments() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
