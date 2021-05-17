/* eslint-disable no-empty */
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { GET_MY_USER_LIST_API_REQUEST } from './types';
import {
  getMyUserListApiStarted,
  getMyUserListApiSuccess,
  getMyUserListApiFailure,
} from './action';

import { API_USER_LIST_URL } from '../../constants/index';

export function* getMyUserListApi(action) {
  try {
    yield put(getMyUserListApiStarted());
    const response = yield axios.get(API_USER_LIST_URL + action.requestBody);
    yield put(getMyUserListApiSuccess(response.data.results));
  } catch (error) {
    yield put(getMyUserListApiFailure(error));
  }
}

export function* myUserListActionWatcher() {
  yield takeLatest(GET_MY_USER_LIST_API_REQUEST, getMyUserListApi);
}
