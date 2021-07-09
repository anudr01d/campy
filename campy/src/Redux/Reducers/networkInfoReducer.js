import ActionTypes from '../Constants';

const initialState = {
  isConnected: true,
};

const networkInfo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.NETWORK_INFO:
      return {...state, isConnected: action.payload};
    default:
      return {...state};
  }
};

export default networkInfo;
