import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './reducers';
import rootSaga from './sagas/index';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// TODO(1): Configure Debugger

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
