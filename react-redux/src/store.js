// src/store.js

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

let store = createStore(rootReducer,composeWithDevTools());

export default store;
