import { createStore,applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
export default function configureStore(initialState) {
  // add support for Redux dev tools
  const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    //apply thunk for async
    composeEnhancers(applyMiddleware(thunk))
  );
}