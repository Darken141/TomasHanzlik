import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { changeEmailInput, changePasswordInput } from '../../redux/sign-in/sign-in.actions'

import { auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = ({email, password, changeEmailInput, changePasswordInput}) => {
    
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className='sign-in'>
            <h2>Sign in</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    onChange={changeEmailInput}
                    label='Email'
                    required 
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    onChange={changePasswordInput}
                    label='Password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = ({ signIn: { email, password } }) => ({
    email: email,
    password: password
})

const mapDispatchToProps = dispatch => ({
    changeEmailInput: (e) => dispatch(changeEmailInput(e.target.value)),
    changePasswordInput: (e) => dispatch(changePasswordInput(e.target.value))

})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);