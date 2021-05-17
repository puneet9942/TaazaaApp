import Immutable from 'seamless-immutable';
import {
  GET_MY_USER_LIST_API_STARTED,
  GET_MY_USER_LIST_API_SUCCESS,
  GET_MY_USER_LIST_API_FAILURE,
} from './types';
import { createReducer } from '../../utilities/reduxUtil';
import { mockData } from './mockData';

export const initialState = Immutable.from({
  loading: false,
  data: null,
  dataError: false,
});

export const getMyUserListApiCallStarted = state => ({
  ...state,
  loading: true,
  data: mockData.results,
  dataError: false,
});
export const getMyUserListApiCallSuccess = (state, response) => ({
  ...state,
  loading: false,
  data: response.response,
  dataError: false,
});

export const getMyUserListApiCallFailure = state => ({
  ...state,
  loading: false,
  data: initialState.data,
  dataError: true,
});

const myUserReducer = createReducer(initialState, {
  [GET_MY_USER_LIST_API_STARTED]: getMyUserListApiCallStarted,
  [GET_MY_USER_LIST_API_SUCCESS]: getMyUserListApiCallSuccess,
  [GET_MY_USER_LIST_API_FAILURE]: getMyUserListApiCallFailure,
});

export default myUserReducer;
