// store.js
import { createStore, combineReducers } from 'redux';
import weatherReducer from './weatherReducer';


const rootReducer = weatherReducer;

// Create your Redux store
const store = createStore(rootReducer)

export default store;
