import React from 'react'
import LargeButton from '../../components/largeButton/LargeButton'
import './verification.css'

const VerificationScreen = () => {
  return (
    <div className='container'>
    <div id='verification'>
      <h3>Verify your Email</h3>
      <div className='mail_outline_verification'>
        <img src="images/verify.png" alt="verify" className='mail_outline_verification_verify' />
        <img src="images/mail-outline.png" alt="mail-outline" className='mail_outline_verification_outline' />
        
      </div>
      <p>Enter 4 didgit verification code we sent at <span>tonikjone@demoo.com</span></p>
      <div className='code_verification'>
        <input type="number" max={1} min={1} maxlength={1} size={1} />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <LargeButton text="Submit" />
      <p className='resend_verification'>Didn’t get  the code? <span>Resend</span></p>
    </div>


  </div>
  )
}

export default VerificationScreen