/**
 * Create by chengkai on 2020/3/22.
 * Describe:
 */
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
