import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from '../containers/Home';
import Posts from '../containers/Posts';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import UserProfile from '../containers/UserProfile';
import UploadPosts from '../containers/UploadPosts';
import NotFound from '../containers/NotFound';

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/post/:id' component={Posts} />
      <Route exact path='/signin' component={isLogged ? Home : SignIn} />
      <Route exact path='/signup' component={isLogged ? Home : SignUp} />
      <Route exact path='/profile/:username' component={UserProfile} />
      <Route exact path='/upload' component={isLogged ? UploadPosts : Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
