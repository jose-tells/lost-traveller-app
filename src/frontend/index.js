import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { config } from '@fortawesome/fontawesome-svg-core';
// Reducer
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers';
// Routes
import App from './routes/app';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

config.autoAddCss = false;

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App isLogged={Boolean(preloadedState.user.id)} />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
