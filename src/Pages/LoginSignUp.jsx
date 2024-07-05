import React from 'react'
import './Css/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text"  placeholder='Name'/>
          <input type="emial"  placeholder='Email-id'/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an Account ?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing,I agree to the terms of use & privacy and policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp