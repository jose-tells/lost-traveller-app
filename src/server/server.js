/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import webpack from 'webpack';
// React
import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { dom } from '@fortawesome/fontawesome-svg-core';
import helmet from 'helmet';
import { env, port } from './config/index';
import initialState from '../frontend/initialState.json';
import reducer from '../frontend/reducers/index';
import serverRoutes from '../frontend/routes/serverRoutes';
import getManifest from './getManifest';

const app = express();

if (env === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    publicPath: webpackConfig.output.publicPath,
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) {
      req.hashManifest = getManifest();
    };
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet(
    { contentSecurityPolicy: false },
  ));
  app.disable('x-powered-by');
};

const setResponse = (html, preloadedState, manifest) => {

  const mainStyle = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';
  return (`
  <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href=${mainStyle} type="text/css">
        <style type='text/css'>${dom.css()}</style>
        <title>The Lost Traveller</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src=${mainBuild} type='text/javascript'></script> 
        <script src=${vendorBuild} type='text/javascript'></script> 
      </body>
    </html>`
  );
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.get('*', renderApp);

app.listen(port, (error) => {
  error ? console.error(error) : console.log(`Server listening on http://localhost:${port}`);
});
