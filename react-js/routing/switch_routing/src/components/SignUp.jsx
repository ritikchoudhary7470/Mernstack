import React, { useState } from 'react'
import './SignUp.css'
import Navbar from './Navbar'

const SignUp = ({dataSend}) => {

const [ data,setData ] = useState({
 fname : '',
 email : '',
 lname : '',
 password : '',
 role : ""
})

  function handleChange(e) {
    const { name, value } = e.target
    setData(prev => ({...prev,[name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    dataSend(data)
    // console.log(data)
  }
    
// console.log(data)


  return (
    <>
   
   <Navbar/>


    <div className="signup-container">
  <form onSubmit={handleSubmit} className="signup-form">
    <h2>Create Account</h2>
    <p>Join us and get started</p>

    <div className="input-group">
      <label>Full Name</label>
      <input type="text" name='fname' value={data.fname} onChange={handleChange} placeholder="Enter your full name" required />
    </div>

     <div className="input-group">
      <label>Last Name</label>
      <input type="text" name='lname' value={data.lname} onChange={handleChange} placeholder="enter last name "  />
    </div>

    <div className="input-group">
      <label>Email</label>
      <input type="email" name='email' value={data.email} onChange={handleChange}
      placeholder="Enter your email" required />
    </div>

    <div className="input-group">
      <label>Password</label>
      <input type="password" name='password' value={data.password} onChange={handleChange} placeholder="Create a password"  />
    </div>

     <div className="input-group">
     <label>Select Role</label>
  <select
    name="role"
    value={data.role}
    onChange={handleChange}
  >
    <option value=""> Select Role </option>
    <option value="user">User</option>
    <option value="admin">Admin</option>
    <option value="manager">Manager</option>
  </select>
    </div>
 
    <button type="submit">Sign Up</button>

    <div className="login-link">
      Already have an account? <a href="#">Login</a>
    </div>
  </form>
</div>

    </>
  )
}

export default SignUp