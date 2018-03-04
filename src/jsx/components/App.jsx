import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Intro from './Intro';

export default function App() {
  return (
    <div>
      <Header />
      <div id="content">
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/intro' component={ Intro } />
        </Switch>
      </div>
    </div>
  );
}

