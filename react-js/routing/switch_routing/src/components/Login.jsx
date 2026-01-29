import React from 'react'
import './Login.css'
import Navbar from './Navbar'

const Login = () => {
  return (
    <>

    <Navbar/>

    <div className="login-container">
  <form className="login-form">
    <h2>Welcome Back</h2>
    <p>Please login to your account</p>

    <div className="input-group">
      <label>Email</label>
      <input type="email" placeholder="Enter your email" required />
    </div>

    <div className="input-group">
      <label>Password</label>
      <input type="password" placeholder="Enter your password" required />
    </div>

    <div className="options">
      <label>
        <input type="checkbox" /> Remember me
      </label>
      <a href="#">Forgot password?</a>
    </div>

    <button type="submit">Login</button>

    <div className="signup-link">
      Don’t have an account? <a href="#">Sign Up</a>
    </div>
  </form>
</div>
      
    </>
  )
}

export default Login
