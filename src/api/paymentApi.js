import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_PATH + '/payments/';

/**
 * @summary fetch payments information from api
 * @return {object} Promise
 */
export function getPayments() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

/**
 * @summary post payment to api
 * @return {object} Promise
 */
export function savePayment(payment) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payment),
  })
    .then(handleResponse)
    .catch(handleError);
}