import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Top from './Top';
import Profile from './Profile';

const App = () => {
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
};

export default App;
