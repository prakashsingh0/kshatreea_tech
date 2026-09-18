import React from 'react'
import logo from '../components/images/kt.png'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='login_container'>
      <div className='form_box'>
        <img src={logo} alt='logo' />
      <strong>Welcome to KT Training</strong>
          <h2 className='heading'>Register</h2>
        
        <form>
          <label> Full Name
            <input placeholder='Full Name' />
          </label>
          <label> Phone no. 
            <input placeholder="Phone number" />
          </label>

          <label> Email
            <input placeholder='Email' />
          </label>
          <label> Password
            <input placeholder="Password" />
          </label>
          <button>Register</button>
          <Link to={"/academy/login"} >I have an accout ? </Link>
        </form>


      </div>
    </div>
  )
}

export default Register
