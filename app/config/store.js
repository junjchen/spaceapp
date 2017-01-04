import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'remote-redux-devtools';

import {sagaMiddleware, rootSaga} from '../middlewares';
import reducers from '../reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;