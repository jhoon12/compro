import {combineReducers } from 'redux';
import loginReducer from './login/login';
import mainReducer from './main/main'
const rootReducer = combineReducers({
    loginReducer,
    mainReducer
});
export default rootReducer;
export type RootState = |ReturnType<typeof rootReducer>