import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Top from './Top';
import Profile from './Profile';
import LinkPage from './LinkPage';

const App = () => (
  <div>
    <Header />
    <div className='content'>
      <Switch>
        <Route exact path='/' component={ Top } />
        <Route path='/profile' component={ Profile } />
        <Route path='/link' component={ LinkPage } />
      </Switch>
    </div>
  </div>
);

export default App;
