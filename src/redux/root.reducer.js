import { combineReducers } from 'redux';

import productionReducer from './production/production.reducer';
import signInReducer from './sign-in/sign-in.reducer';
import signUpReducer from './sign-up/sign-up.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    production: productionReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    user: userReducer
})