import { SignInActionTypes } from './sign-in.types.js';

export const changeEmailInput = emailInput => ({
    type: SignInActionTypes.CHANGE_EMAIL_INPUT,
    payload: emailInput
})

export const changePasswordInput = pwdInput => ({
    type: SignInActionTypes.CHANGE_PASSWORD_INPUT,
    payload: pwdInput
})