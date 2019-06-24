import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    //apply thunk for async
    applyMiddleware(thunk)
  );
}