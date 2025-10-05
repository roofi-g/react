import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios';
import { fetchUserSuccess, fetchUserFailure } from "./userSlice";

function fetchUserApi(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

function* fetchUserSaga(action) {
  try {
    const response = yield call(fetchUserApi, action.payload);
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export default function* watchUserSaga() {
  yield takeEvery("user/fetchUser", fetchUserSaga);
}
