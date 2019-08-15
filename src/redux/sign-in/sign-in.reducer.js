import { SignInActionTypes } from './sign-in.types';

const INITIAL_STATE = {
    email: '',
    password: ''
    
}

const signInReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SignInActionTypes.CHANGE_EMAIL_INPUT:
            return {
                ...state,
                email: action.payload
            }

        case SignInActionTypes.CHANGE_PASSWORD_INPUT:
            return {
                ...state,
                password: action.payload
            }

        default:
            return state
    }
}

export default signInReducer