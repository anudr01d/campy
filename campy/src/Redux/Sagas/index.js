import {all, fork} from 'redux-saga/effects';

import postSaga from './postSaga';

export default function* root() {
  yield all([fork(postSaga)]);
}
