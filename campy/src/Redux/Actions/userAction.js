import ActionType from '../Constants';

export const userLoggedIn = () => ({
  type: ActionType.USER_LOGGED_IN,
});

export const userLoggedOut = () => ({
  type: ActionType.USER_LOGGED_OUT,
});
