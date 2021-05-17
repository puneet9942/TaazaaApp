import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useEffect } from 'react';
import get from 'lodash.get';
import { getMyUserListApiRequest } from '../action';

const useMyUserData = counter => {
  const dispatch = useDispatch();

  const { data, loading, dataError } = useSelector(
    state => ({
      data: get(state, 'myUserReducer.data'),
      loading: get(state, 'myUserReducer.loading'),
      dataError: get(state, 'myUserReducer.dataError'),
    }),
    shallowEqual,
  );

  const boundAction = useCallback(
    () => dispatch(getMyUserListApiRequest(counter)),
    [dispatch],
  );

  useEffect(() => {
    if (!data) {
      boundAction();
    }
  }, [boundAction, data]);

  return {
    data,
    loading,
    dataError,
    getMyUserListApiRequest: boundAction,
  };
};

export default useMyUserData;
