import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import './verificationPassword.css'

const VerificationPasswordScreen = () => {
  const [resetEmail,setResetEmail] = useState('')
  let navigate = useNavigate()

  const resetPassword =  ()=>{

    axios.post('https://toptal.ibrcloud.com/api/v1/auth/forget-password', {email:resetEmail}).then(res =>{
    
    console.log("reset password successfuly");
    navigate('/login')
    
}).catch(err =>{
  console.log(err.response.data);
})

  }
  return (
    <>
    <Header /> 
    <div className='container'>
    <div id='verification_password'>
      <h3>Forget Password</h3>
      <div className='mail_outline_verification'>
        <img src="../../images/verify.png" alt="verify" className='mail_outline_verification_verify' />
        <img src="../../images/mail-outline.png" alt="mail-outline" className='mail_outline_verification_outline' /> 
      </div>
      <p>Enter the email associated with your account</p>
    
      <div className='input_component'>
            <input type="email" placeholder="Enter email address" onChange={(e) => setResetEmail(e.target.value)}/>
      </div>
      
      <div >
        <button className='large_button' onClick={()=> resetPassword()}  >
          Resset Password
        </button>
    </div>
      <p className='try_way'>Try another way</p>
    </div>
  </div>
    </>
  )
}

export default VerificationPasswordScreen