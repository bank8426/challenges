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

it('Should handle update message', function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const message = 'Thank you for donation';

  // act
  const action = messageActions.updateMessage(message);
  store.dispatch(action);

  // assert
  const updatedMessage = store.getState().message;
  expect(updatedMessage).toEqual(message);
});
