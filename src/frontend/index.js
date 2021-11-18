import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { config } from '@fortawesome/fontawesome-svg-core';
// Reducer
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers';
// Routes
import App from './routes/app';

config.autoAddCss = false;

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers());

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
