import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import myUserReducer from '../component/user/reducer';
import { myUserListActionWatcher } from '../component/user/saga';

function* saga() {
  yield all([myUserListActionWatcher()]);
}

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  myUserReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['myUserReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware)),
);

// eslint-disable-next-line import/prefer-default-export
export const persistor = persistStore(store);

sagaMiddleware.run(saga);
