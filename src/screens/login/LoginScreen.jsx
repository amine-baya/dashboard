import React from 'react'
import Input from '../../components/input/Input'
import LargeButton from '../../components/largeButton/LargeButton'
import Title from '../../components/title/Title'
import './login.css'

const LoginScreen = () => {
  return (
    <div className='container '>
    <div id='login'>
        <h6>Welcome back</h6>
        <Title title="Login to your account" />
        <Input label="Email Address" placeH="Type your e-mail " type="email" />
        <Input label="Password" placeH="Enter Password" type="password" />
        <div className='password_memory'>
            <div><input type="radio"></input> Remember me</div>
            <div><span style={{color:"#2B6CB0"}} >Forgot password?</span></div>
        </div>
        <LargeButton text="Log in" />
        <p className='resend_verification'>Dont have an account? <span>Join free today </span></p>
    </div>
    
    </div>
  )
}

export default LoginScreen