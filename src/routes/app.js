import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from '../containers/Home';
import Posts from '../containers/Posts';
import UserProfile from '../containers/UserProfile';
import UploadPosts from '../containers/UploadPosts';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/post/:id' component={Posts} />
      <Route exact path='/profile' component={UserProfile} />
      <Route exact path='/upload' component={UploadPosts} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
