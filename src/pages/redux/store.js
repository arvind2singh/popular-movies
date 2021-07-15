import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../redux/reducers/userReducer';
import userSaga from './sagas/userSaga'
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer:userReducer,
  middleware:[...getDefaultMiddleware(), sagaMiddleware]
})
// Then run the saga
sagaMiddleware.run(userSaga)

export default store;
