import { createStore } from 'redux';
import personnelReducer from './reducer';

const store = createStore(personnelReducer);

export default store;
