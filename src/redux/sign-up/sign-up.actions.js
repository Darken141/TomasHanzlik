import { SignUpActionTypes } from './sign-up.types';

export const changeNameInput = name => ({
    type: SignUpActionTypes.CHANGE_NAME_INPUT,
    payload: name
})

export const changeEmailInput = email => ({
    type: SignUpActionTypes.CHANGE_SIGNUP_EMAIL_INPUT,
    payload: email
})

export const changePasswordInput = password => ({
    type: SignUpActionTypes.CHANGE_SIGNUP_PASSWORD_INPUT,
    payload: password
})

export const changeConfirmPasswordInput = confirmPassword => ({
    type: SignUpActionTypes.CHANGE_CONFIRM_PASSWORD_INPUT,
    payload: confirmPassword
})