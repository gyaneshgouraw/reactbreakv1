import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp)
window.aa = store



ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
