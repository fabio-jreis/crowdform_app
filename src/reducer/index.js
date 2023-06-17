import { combineReducers } from 'redux';

import FundsReducer from './FundsReducer';
import UserReducer from './UserReducer'

export default combineReducers({
    FundsReducer,
    UserReducer
})