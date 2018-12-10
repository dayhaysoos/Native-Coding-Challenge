import { combineReducers } from 'redux';
import kitties from './kittyReducer';

const rootReducer = combineReducers({
    kitties
});

export default rootReducer;