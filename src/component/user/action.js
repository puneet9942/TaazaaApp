import {
  GET_MY_USER_LIST_API_REQUEST,
  GET_MY_USER_LIST_API_STARTED,
  GET_MY_USER_LIST_API_SUCCESS,
  GET_MY_USER_LIST_API_FAILURE,
} from './types';
import { createAction } from '../../utilities/reduxUtil';

export const getMyUserListApiRequest = requestBody =>
  createAction(GET_MY_USER_LIST_API_REQUEST, { requestBody });

export const getMyUserListApiStarted = () =>
  createAction(GET_MY_USER_LIST_API_STARTED);
export const getMyUserListApiSuccess = response =>
  createAction(GET_MY_USER_LIST_API_SUCCESS, { response });
export const getMyUserListApiFailure = response =>
  createAction(GET_MY_USER_LIST_API_FAILURE, { response });
