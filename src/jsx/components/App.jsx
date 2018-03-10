import React from 'react';
import { Route } from 'react-router-dom';

import ConnectedSwitch from '../containers/ConnectedSwitch';
import Header from '../containers/Header';
import Top from './Top';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <Header />
      <div id="content">
        <ConnectedSwitch>
          <Route exact path='/' component={ Top } />
          <Route path='/profile' component={ Profile } />
        </ConnectedSwitch>
      </div>
    </div>
  );
};

export default App;
