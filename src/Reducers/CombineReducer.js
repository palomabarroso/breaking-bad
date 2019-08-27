import {combineReducers} from 'redux';
import {InputSearchReducer} from './Search/inputSearchReducer';
import {cardReducer} from './Card/cardReducer';

export const reducers = combineReducers({
    updateSearch: InputSearchReducer,
    listCard: cardReducer
})