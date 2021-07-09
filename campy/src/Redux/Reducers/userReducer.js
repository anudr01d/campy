import ActionType from '../Constants';

const initialState = {
  isUserLoggedIn: false,
};

const getUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_LOGGED_IN:
      return {...state, isUserLoggedIn: true};
    case ActionType.USER_LOGGED_OUT:
      return {...state, isUserLoggedIn: false};
    default:
      return {...state};
  }
};

export default getUser;
