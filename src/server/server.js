/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import webpack from 'webpack';
// Passport
import passport from 'passport';
// Boom
import boom from '@hapi/boom';
// Cookie-parser
import cookieParser from 'cookie-parser';
// Axios
import axios from 'axios';
// React
import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
// Middleware: Helmet
import helmet from 'helmet';
import { dom } from '@fortawesome/fontawesome-svg-core';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../frontend/reducers/index';
// React-router
import serverRoutes from '../frontend/routes/serverRoutes';
// Manifest.json
import getManifest from './getManifest';
// Utils-queries
import getUserData from './utils/queries/userData';
import getRankings from './utils/queries/getRankings';
import getPostRankings from './utils/queries/getPostRankings';
import getPosts from './utils/queries/getPosts';
import getRootUser from './utils/queries/getRootUser';
import listPostComments from './utils/queries/listPostComments';
// Env vars
import { env, port, apiUrl, dev, cssInline, jsInline } from './config';

const ONE_MONTH_IN_MILLISECONDS = 2629800000;
const TWO_HOURS_IN_MILLISECONDS = 7200000;

// Basic Strategy
require('./utils/auth/strategies/basic');

const app = express();

// Parsers
app.use(express.json());
app.use(cookieParser());

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
  app.use((req, res, next) => {
    res.setHeader('content-security-policy-report-only', `base-uri 'self'; connect-src 'self'; default-src 'self'; font-src 'self' https://fonts.gstatic.com; frame-src 'self'; img-src 'self' https://images.unsplash.com https://img.icons8.com/; manifest-src 'self'; media-src 'self'; object-src 'none'; report-uri https://61c4b58db122e1ebfdf74fec.endpoint.csper.io/; script-src 'report-sample' 'self' '${jsInline}'; style-src 'report-sample' 'self' https://fonts.googleapis.com '${cssInline}'; worker-src 'none';`);
    next();
  });

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

const renderApp = async (req, res) => {
  let initialState;
  const { name: username, email, id, token } = req.cookies;
  try {
    // Get root user by username
    const user = await getRootUser(username, email, id, token);
    // Get posts
    const posts = await getPosts();
    // Get rankings
    const rankings = await getRankings();

    initialState = {
      user,
      userRequest: {},
      post: {},
      posts,
      rankings,
      addRankings: {},
      addRatings: {},
      filterRanks: [],
      counter: 0,
      error: '',
    };
  } catch (err) {
    initialState = {
      user: {},
      userRequest: {},
      post: {},
      posts: [],
      rankings: [],
      addRankings: {},
      addRatings: {},
      filterRanks: [],
    };
  }

  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const isLogged = initialState.user.id;
  const idAdmin = initialState.user.isAdmin;
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(Boolean(isLogged, idAdmin)))}
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.get('/users/:username', async (req, res, next) => {
  const { username } = req.params;

  try {
    const user = await getUserData(username, getPosts);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;
  try {
    const userData = await axios({
      url: `${apiUrl}/api/auth/sign-up`,
      method: 'post',
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        verified: false,
        contributions: {
          posts: [],
          photos: [],
          comments: [],
        },
      },
    });

    res.status(201).json({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      id: userData.data.id,
    });
  } catch (err) {
    next(err);
  }
});

app.post('/auth/sign-in', async (req, res, next) => {
  const { rememberMe } = req.body;
  passport.authenticate('basic', async (error, data) => {
    try {
      if (error || !data) {
        return next(boom.unauthorized());
      };

      req.login(data, { session: false }, async (err) => {
        if (err) {
          next(err);
        };

        const { token, ...user } = data;

        res.cookie('token', token, {
          http: !dev,
          secure: !dev,
          maxAge: rememberMe ? ONE_MONTH_IN_MILLISECONDS : TWO_HOURS_IN_MILLISECONDS,
        });
        res.status(200).json(user);
      });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

app.get('/posts/:postId', async (req, res, next) => {
  const { postId } = req.params;
  try {
    let postData = await axios({
      url: `${apiUrl}/api/posts/${postId}`,
      method: 'get',
    });

    postData = postData.data.data;

    const postRankings = await getPostRankings(`${apiUrl}/api/posts-rankings?postId=${postData._id}`);

    const postComments = await listPostComments(`${apiUrl}/api/comments?postId=${postData._id}`);

    const post = {
      ...postData,
      rankings: postRankings,
      comments: postComments,
    };

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
});

app.post('/posts', async (req, res, next) => {
  const { token, id } = req.cookies;
  const { body: post } = req;
  try {
    const postData = {
      ...post,
      averagePrice: Number(post.averagePrice),
      usersContributors: [],
      comments: [],
    };

    const { data, status } = await axios({
      url: `${apiUrl}/api/posts`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'post',
      data: postData,
    });

    await axios({
      url: `${apiUrl}/api/user-posts`,
      method: 'post',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        userId: id,
        postId: data.data,
      },
    });

    if (!data || status !== 201) {
      next(boom.unauthorized());
    }

    res.status(201).json(data.data);

  } catch (err) {
    next(err);
  }
});

app.post('/comments', async (req, res, next) => {
  const { token, id } = req.cookies;
  const { body: comment } = req;
  try {
    const { data, status } = await axios({
      url: `${apiUrl}/api/comments`,
      method: 'post',
      headers: { Authorization: `Bearer ${token}` },
      data: comment,
    });

    const commentData = data.data;

    if (!data || status !== 201) {
      return next(boom.unauthorized());
    }

    await axios({
      url: `${apiUrl}/api/user-comments`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'post',
      data: {
        userId: id,
        commentId: data.data,
      },
    });

    return res.status(201).json(commentData);
  } catch (err) {
    next(err);
  }
});

app.post('/posts-rankings', async (req, res, next) => {
  const { body: postRanking } = req;
  const { token } = req.cookies;
  try {
    const { data, status } = await axios({
      url: `${apiUrl}/api/posts-rankings`,
      method: 'post',
      headers: { Authorization: `Bearer ${token}` },
      data: postRanking,
    });

    if (!data || status !== 201) {
      next(boom.unauthorized());
    }

    res.status(201).json(data.data);
  } catch (err) {
    next(err);
  };
});

app.delete('/comments/:commentId', async (req, res, next) => {
  const { commentId } = req.params;
  const { token } = req.cookies;
  try {
    const { data, status } = await axios({
      url: `${apiUrl}/api/comments/${commentId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'delete',
    });

    if (!data || status !== 200) {
      next(boom.unauthorized());
    }

    res.status(200).json(data.data);
  } catch (err) {
    next(err);
  }
});

app.get('*', renderApp);

app.listen(port, (error) => {
  error ? console.error(error) : console.log(`Server listening on http://localhost:${port}`);
});
