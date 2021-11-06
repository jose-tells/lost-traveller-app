import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from '../containers/Home';
import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import NotFound from '../containers/NotFound';
//style Globa;
import '../assets/styles/globals.styl';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signUp' component={SignUp} />
      <Route exact path='/signIn' component={SignIn} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
