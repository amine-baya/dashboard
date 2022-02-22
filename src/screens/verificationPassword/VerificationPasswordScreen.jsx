import React from 'react'
import Input from '../../components/input/Input'
import LargeButton from '../../components/largeButton/LargeButton'
import './verificationPassword.css'

const VerificationPasswordScreen = () => {
  return (
    <div className='container'>
    <div id='verification_password'>
      <h3>Forget Password</h3>
      <div className='mail_outline_verification'>
        <img src="images/verify.png" alt="verify" className='mail_outline_verification_verify' />
        <img src="images/mail-outline.png" alt="mail-outline" className='mail_outline_verification_outline' /> 
      </div>
      <p>Enter the email associated with your account</p>
      <Input placeH="Enter email address" type="text" />
      <LargeButton text="Resset Password" />
      <p className='try_way'>Try another way</p>
    </div>


  </div>
  )
}

export default VerificationPasswordScreen