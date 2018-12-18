/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(rootReducer, { form: '' }, applyMiddleware(thunk));

export default store;
