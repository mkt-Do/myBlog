// action if browser back or forward button clicked or url changed directly
import { LOCATION_CHANGE } from 'react-router-redux';
import { matchPath } from 'react-router-dom';

// action

// action creator
export const changeLocation = (pathname) => {
  return {
    type: LOCATION_CHANGE,
    payload: {
      title: pathname,
    }
  };
};

// initial state
const initialState = {
  title: 'HOME',
};

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
  case LOCATION_CHANGE:
    console.log(action.payload.title);
    return {
      title: action.payload.title,
    }
  default:
    return state;
  }
};

export default reducer;
