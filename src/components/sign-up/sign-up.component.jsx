import React from 'react';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { 
    changeNameInput,
    changeEmailInput,
    changePasswordInput,
    changeConfirmPasswordInput
} from '../../redux/sign-up/sign-up.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

const SignUp = ({displayName, email, password, confirmPassword, changeNameInput, changeEmailInput, changePasswordInput, changeConfirmPasswordInput}) => {
    
    const handleSubmit = async event => {
        event.preventDefault();

        console.log(displayName, email, password, confirmPassword)
        
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>Register</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={changeNameInput}
                        label='Display Name'
                        required
                />
                <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange={changeEmailInput}
                        label='Email'
                        required
                />
                <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange={changePasswordInput}
                        label='Password'
                        required
                />
                <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={changeConfirmPasswordInput}
                        label='Confirm Password'
                        required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}

const mapStateToProps = ({signUp: {displayName, email, password, confirmPassword}}) => ({
    displayName: displayName,
    email: email,
    password: password,
    confirmPassword: confirmPassword
})

const mapDispatchToProps = dispatch => ({
    changeNameInput: (e) => dispatch(changeNameInput(e.target.value)),
    changeEmailInput: (e) => dispatch(changeEmailInput(e.target.value)),
    changePasswordInput: (e) => dispatch(changePasswordInput(e.target.value)),
    changeConfirmPasswordInput: (e) => dispatch(changeConfirmPasswordInput(e.target.value))

})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);