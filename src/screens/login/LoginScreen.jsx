import axios from 'axios'
import React, { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { UserInfo } from '../../helpers/ContextApi'
import Title from '../../components/title/Title'
import './login.css'

const LoginScreen = () => {
  const {setUserInfo} = useContext(UserInfo)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  let navigate = useNavigate()

  const submitHandler = async(e)=>{
    e.preventDefault()
    
    const config = {
      headers: {
          'Content-Type': 'application/json',
      },
    }

    await axios.post('https://toptal.ibrcloud.com/api/v1/auth/login', {email, password}, config).then(res =>{
      setUserInfo(res.data)
      localStorage.setItem("userInfo", JSON.stringify(res.data) )
      navigate('/calender')
    }).catch(err =>{
      console.err(err);
    })
    
}


  return (
    <>
    <Header /> 
    <div className='container '>
    <div id='login'>
        <h6>Welcome back</h6>
        <Title title="Login to your account" />

        <form onSubmit={submitHandler}> 
            <div className='input_component'>
              <label className='label'>Email Address</label>
              <input type="email" placeholder="Type your e-mail " onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='input_component'>
              <label className='label'>Password</label>
              <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='password_memory'>
                <div><input type="radio"></input> Remember me</div>
                <div><span style={{color:"#2B6CB0"}}> <Link to="/verification-password">Forgot password?</Link> </span></div>
            </div>
            
            <button className='large_button' type='submit'  >
                Log in
            </button>

        </form>
        <p className='resend_verification'>Dont have an account? <span> <Link to="/register" >Join free today</Link>  </span></p>
    </div>
    </div>
    </>
  )
}

export default LoginScreen