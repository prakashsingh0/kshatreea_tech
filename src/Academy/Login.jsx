import React from 'react'
import './Login.css'
import logo from "../components/images/kt.png"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login_container'>
      <div className='form_box'>
        <img src={logo} alt='logo' />
        <strong>Welcome to KT Training</strong>
        <h2 className='heading'>Login</h2>
        <form>

          <label> Email
            <input placeholder='Email' />
          </label>
          <label> Password
            <input placeholder="Password" />
          </label>
          <button>Login</button>
          <Link to={"/academy/signup"} >I don't have accout ?</Link>
        </form>


      </div>
    </div>
  )
}

export default Login
