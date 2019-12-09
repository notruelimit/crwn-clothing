import React from 'react'

import SignIn from '../../components/sign-in/SIgnIn'
import SignUp from '../../components/sign-up/SignUp'

import './SignInAndSignUp.scss'

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUp
