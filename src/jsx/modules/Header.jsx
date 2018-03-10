// action
const CHANGE_TITLE = 'CHANGE_TITLE';

// action creator
export const changeTitle = (title = 'Home') => {
  return {
    type: CHANGE_TITLE,
    payload: {
      title: title,
    }
  };
};

// initial state
const initialState = {
  title: 'Home',
};

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
  case CHANGE_TITLE:
    return {
      title: action.payload.title,
    };
  default:
    return state;
  }
};

export default reducer;
