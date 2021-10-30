import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
