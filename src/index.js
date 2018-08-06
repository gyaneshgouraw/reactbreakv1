/**
 * NPM imports
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

/**
 * custom imports
 */
import reducers from './reducers'
import mySaga from './Login/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
    
)


sagaMiddleware.run(mySaga)


ReactDOM.render(<Root store={store} />, document.getElementById('root'));
//registerServiceWorker();
