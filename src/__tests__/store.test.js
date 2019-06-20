import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import initialState from '../redux/reducers/initialState';
import * as donateActions from '../redux/actions/donateActions';
import * as messageActions from '../redux/actions/messageActions';

it('Should handle update donation', function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const amount = 10;

  // act
  const action = donateActions.updateTotalDonate(amount);
  store.dispatch(action);

  // assert
  const updatedDonation = store.getState().donate;
  expect(updatedDonation).toEqual(amount);
});

it('Should handle add message', function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const message = 'Thank you for donation';
  const id = 1;
  const isErrorMessage = false;
  const expected = [{message,id,isErrorMessage}] 
  // act
  const action = messageActions.addMessage(message,id,isErrorMessage);
  store.dispatch(action);

  // assert
  const addedMessages = store.getState().messages;
  expect(addedMessages).toEqual(expected);
});

it('Should handle remove message', function() {
  // arrange
  const store = createStore(rootReducer, 
    {...initialState , messages : [
      {
        id : 1,
        message : 'Hello 1',
      }], 
    });
  const id = 1;
  const expected = [] 
  // act
  const action = messageActions.removeMessageById(id);
  store.dispatch(action);

  // assert
  const addedMessages = store.getState().messages;
  expect(addedMessages).toEqual(expected);
});

describe('INITIAL_STATE', () => {
  it('is correct', () => {
    const expectedInitialState = { apiCallsInProgress: 0,
      donate: 0,
      messages: [],
      charities: [],
      payments: []};

    expect(initialState).toEqual(expectedInitialState);
  });
});