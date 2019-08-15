import { SignUpActionTypes } from './sign-up.types';

const INITIAL_STATE = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const signUpReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SignUpActionTypes.CHANGE_NAME_INPUT:
            return {
                ...state,
                displayName: action.payload
            }

        case SignUpActionTypes.CHANGE_SIGNUP_EMAIL_INPUT:
            return {
                ...state,
                email: action.payload
            }

        case SignUpActionTypes.CHANGE_SIGNUP_PASSWORD_INPUT:
            return {
                ...state,
                password: action.payload
            }

        case SignUpActionTypes.CHANGE_CONFIRM_PASSWORD_INPUT:
            return {
                ...state,
                confirmPassword: action.payload
            }

        default:
            return state
    }
}

export default signUpReducer;