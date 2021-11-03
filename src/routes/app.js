import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from '../containers/Home';
import Posts from '../containers/Posts';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/posts' component={Posts} />
    </Switch>
  </BrowserRouter>
);

export default App;
