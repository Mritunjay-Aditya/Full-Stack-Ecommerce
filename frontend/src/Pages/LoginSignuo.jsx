import React from 'react'
import './CSS/loginsignup.css'
const LoginSignuo=()=>{
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text " placeholder='Your Name'  />
          <input type="email" placeholder='E-mail Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account ? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing , i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignuo
