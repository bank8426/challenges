import { handleResponse, handleError } from '../../../../src/api/apiUtils';

describe('Async handleResponse', () => {
  it('should handle error 400', async () => {
    let message = '';
    try {
      await handleResponse({
        body: 'Bad request',
        ok: false,
        status: 400 , 
        statusText: 'Bad request',
        text : async () => 'Bad request',
      })
    } catch (e) {
      message = e.message
    }
    expect(message).toEqual('Bad request')
  });

  it('should handle error 404', async () => {
    let message = '';
    try {
      await handleResponse({
        status: 404,
      })
    } catch (e) {
      message = e.message
    }
    expect(message).toEqual('Network response was not ok.')
  });
});

describe('handleError', () => {
  it('should handle error from api call', () => {
    let message = '';
    try {
      handleError(new Error('Error message'))
    } catch (e) {
      message = e.message
    }
    expect(message).toEqual('Error message')
  });
})