/**
 * @summary handle response after call api, by parse to json if success and throw error when fail
 * @async
 * @param {object} response response to a request
 * @return {object} object of response
 */
export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not ok.');
}
  
/**
 * @summary console error when fail
 * @param {object} error error object
 */
export function handleError(error) {
  console.error('API call failed. ' + error);
  throw error;
}
  