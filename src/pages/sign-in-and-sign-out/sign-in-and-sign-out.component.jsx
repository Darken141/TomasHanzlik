import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
// import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-out.styles.scss';

const SignInAndSignOutPage = () => {
    return (
        <div className='sign-in-and-sign-out'>
            <SignIn />
            <main className='infopanel'>
                <h2 className='infopanel__heading-primary'>
                    Informácie:
                </h2>
            </main>
        </div>
    )
}

export default SignInAndSignOutPage;