import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from './reducers/index';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducers, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(thunk),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
