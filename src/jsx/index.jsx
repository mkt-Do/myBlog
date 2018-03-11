import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';

import App from './components/App';
// import reducer from './modules';

const history = createBrowserHistory();
const store = createStore(
//  reducer,
  applyMiddleware(
    routerMiddleware(history)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
