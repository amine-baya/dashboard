import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import LargeButton from '../../components/largeButton/LargeButton'
import { UserInfo } from '../../helpers/ContextApi'
import './verification.css'

const VerificationScreen = () => {

  const [digit1,setDigit1] = useState('')
  const [digit2,setDigit2] = useState('')
  const [digit3,setDigit3] = useState('')
  const [digit4,setDigit4] = useState('')
  const {userInfo, setVerifyEmailModalShow, setVerifiedEmailModalShow} = useContext(UserInfo)
  let navigate = useNavigate()





  const verfyEmailCode =()=>{

    const code = digit1 + digit2 + digit3 + digit4
   
    const config = {
      headers: {
        Authorization:`Bearer ${userInfo?.token}`
      },
    }
    
    axios.post('https://toptal.ibrcloud.com/api/v1/user/otp-verify',{otp: code.toString()}, config).then(res =>{
      setVerifiedEmailModalShow(true)
      setVerifyEmailModalShow("false")
    navigate("/calender");
    
  }).catch(err =>{
      console.log(err.response);
  })

  }




    const verifyEmail =()=>{

      const config = {
        headers: {
          Authorization:`Bearer ${userInfo?.token}`
        },
      }

    axios.post('https://toptal.ibrcloud.com/api/v1/user/otp-send-mail', {}, config).then(res =>{

      
      console.log(res);
      
    }).catch(err =>{
        console.log(err.response);
    })
    }
  return (
    <>
    <Header /> 
      <div className='container'>
        <div id='verification'>
          <h3>Verify your Email</h3>
          <div className='mail_outline_verification'>
            <img src="../../images/verify.png" alt="verify" className='mail_outline_verification_verify' />
            <img src="../../images/mail-outline.png" alt="mail-outline" className='mail_outline_verification_outline' />
          </div>
          <p>Enter 4 didgit verification code we sent at <span>{userInfo?.user.email}</span></p>
          <div className='code_verification'>
            <input type="text"   maxLength="1"  value={digit1} onChange={(e)=> setDigit1(e.target.value.replace(/\D/g,''))} />
            <input  type="text"  maxLength="1"  value={digit2} onChange={(e)=> setDigit2(e.target.value.replace(/\D/g,''))} />
            <input  type="text"  maxLength="1"  value={digit3} onChange={(e)=> setDigit3(e.target.value.replace(/\D/g,''))} />
            <input  type="text"  maxLength="1"  value={digit4} onChange={(e)=> setDigit4(e.target.value.replace(/\D/g,''))} />
            
          </div>
         
          <div >
              <button className='large_button' onClick={()=>verfyEmailCode()} >
                Submit
              </button>
          </div>
          <p className='resend_verification'>Didn’t get  the code? <span onClick={()=>verifyEmail()}  >Resend</span></p>
        </div>
      </div>
    </>
  )
}

export default VerificationScreen