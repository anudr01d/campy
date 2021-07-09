import ActionTypes from '../Constants/index';

export const networkInfo = (payload) => ({
  type: ActionTypes.NETWORK_INFO,
  payload,
});
