import ActionType from '../Constants';

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const postReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.GET_POSTS:
      return {...state, isLoading: true};
    case ActionType.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        isLoading: false,
        error: null,
      };
    case ActionType.GET_POSTS_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
        posts: [],
      };
    case ActionType.RESET_POST:
      return {
        ...state,
        error: null,
        posts: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default postReducer;
