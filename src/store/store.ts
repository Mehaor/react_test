import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import departments from './departments';
import employees from './employees';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const reducers = combineReducers({departments, employees});

export const store: any = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);