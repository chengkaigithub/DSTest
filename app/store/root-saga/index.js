/**
 * Create by chengkai on 2020/3/24.
 * Describe: 异步请求示例
 */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { USER_INFO_ACTION } from '../action/action-types';

function* fetchUser(action) {
  const { success, fail } = action.payload || {};
  let userInfo = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
  const json = yield userInfo.json();
  if (userInfo.status === 200) {
    success && success(json);
    yield put({
      type: USER_INFO_ACTION,
      payload: json,
    });
  } else {
    fail && fail(json);
    yield put({
      type: USER_INFO_ACTION,
      payload: [],
    });
  }
}

function* watchFetchUser() {
  yield takeLatest('FETCH_USER_INFO', fetchUser);
}

export default function* rootSaga() {
  yield all([watchFetchUser()]);
}
