import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import headerReducer from './Header';

export default combineReducers({
  header: headerReducer,
  router: routerReducer,
});
