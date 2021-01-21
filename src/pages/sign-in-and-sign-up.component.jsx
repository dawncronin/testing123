import React from 'react';

import SignIn from '../components/sign-in.component'
import SignUp from '../components/sign-up.component'

import './sign-in-and-sign-up.styles.scss'


const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up" >
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage