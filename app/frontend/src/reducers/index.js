import { combineReducers } from 'redux';
import ideas from './ideas';
import errors from './errors';
import messages from './messages';
import auth from './auth';


export default combineReducers({
    ideas,
    errors,
    messages,
    auth,
});