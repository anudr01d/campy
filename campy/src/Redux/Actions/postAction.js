import ActionType from '../Constants';

export const getPosts = () => ({
  type: ActionType.GET_POSTS,
});

export const getPostsSuccess = (payload) => ({
  type: ActionType.GET_POSTS_SUCCESS,
  payload,
});

export const getPostsFailed = (payload) => ({
  type: ActionType.GET_POSTS_FAILED,
  payload,
});

export const resetPost = () => ({
  type: ActionType.RESET_POST,
});
