import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from '../containers/Home';
import Posts from '../containers/Posts';
import UserProfile from '../containers/UserProfile';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/posts' component={Posts} />
      <Route exact path='/profile' component={UserProfile} />
    </Switch>
  </BrowserRouter>
);

export default App;
