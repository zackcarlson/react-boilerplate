import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Instructions from './Instructions';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/instructions' component={Instructions} />
    </Switch>
  </main>
)

export default Main;