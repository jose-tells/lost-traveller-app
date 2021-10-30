import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from '../components/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
