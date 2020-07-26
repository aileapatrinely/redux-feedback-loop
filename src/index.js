import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = {};

const feedbackReducer = (state = feedback, action) => {
  if (action.type === 'ADD_FEELINGS') {
    return { feeling: action.payload };
  }
  if (action.type === 'ADD_UNDERSTANDING') {
    return { ...state, understanding: action.payload };
  }
  if (action.type === 'ADD_SUPPORT') {
    return { support: action.payload };
  }
  if (action.type === 'ADD_COMMENTS') {
    return { comments: action.payload };
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
