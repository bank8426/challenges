import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_PATH + '/payments/';

export function getPayments() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savePayments(payment) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payment),
  })
    .then(handleResponse)
    .catch(handleError);
}