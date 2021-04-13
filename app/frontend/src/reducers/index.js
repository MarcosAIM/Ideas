import { combineReducers } from 'redux';
import ideas from './ideas';
import errors from './errors';

export default combineReducers({
    ideas,
    errors
});