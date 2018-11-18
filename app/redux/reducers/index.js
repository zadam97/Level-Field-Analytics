import {combineReducers} from 'redux';
import userProfile from './userProfile';
import authBlur from './authBlur';

export default combineReducers({
    userProfile,
    authBlur
})