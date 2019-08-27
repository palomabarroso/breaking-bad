import {createStore} from 'redux';
import {reducers} from '../Reducers/CombineReducer'

export const store = createStore(reducers);