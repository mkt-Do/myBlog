import { combineReducers } from 'redux';

import headerReducer from './Header';

export default combineReducers({
  header: headerReducer,
});
