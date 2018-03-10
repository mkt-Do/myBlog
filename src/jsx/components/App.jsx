import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Top from './Top';
import Header from './Header';
import Profile from './Profile';

export default function App() {
  return (
    <div>
      <Header />
      <div id="content">
        <Switch>
          <Route exact path='/' component={ Top } />
          <Route path='/profile' component={ Profile } />
        </Switch>
      </div>
    </div>
  );
}
