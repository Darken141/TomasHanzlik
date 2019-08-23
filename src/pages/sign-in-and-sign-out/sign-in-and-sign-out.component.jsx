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

                <p className='infopanel__description'>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute 
                irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id 
                est laborum
                </p>
            </main>
        </div>
    )
}

export default SignInAndSignOutPage;