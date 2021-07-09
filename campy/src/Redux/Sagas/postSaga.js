import {takeEvery, all, call, put, delay} from 'redux-saga/effects';

import ApiCaller from '../../Utils/apiCaller';

import {getPostsSuccess, getPostsFailed} from '../Actions/postAction';
import ActionType from '../Constants';

function* getPostsSaga() {
  try {
    yield delay(2000);
    const response = yield call(ApiCaller, 'get', '/');
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFailed(error.message));
  }
}

function* getPostsWatcher() {
  yield takeEvery(ActionType.GET_POSTS, getPostsSaga);
}

export default function* postsSaga() {
  yield all([getPostsWatcher()]);
}
