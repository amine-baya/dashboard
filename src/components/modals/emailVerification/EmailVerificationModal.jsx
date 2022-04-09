import axios from 'axios'
import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { UserInfo } from '../../../helpers/ContextApi'
import './emailVerificationModal.css'

const EmailVerificationModal = (props) => {

  const {userInfo} = useContext(UserInfo)
  let navigate = useNavigate()

    const verifyEmail =()=>{

      const config = {
        headers: {
          Authorization:`Bearer ${userInfo?.token}`
        },
      }

    axios.post('https://toptal.ibrcloud.com/api/v1/user/otp-send-mail', {}, config).then(res =>{
      
    navigate('/verification')
      
      console.log(res);
      
    }).catch(err =>{
        console.log(err.response);
    })
    }

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          
          <Modal.Body>
            <div id='email_verification_modal'>
                <div className='email_verification_modal_container'>
                    <h1>Verify Your Email</h1>
                    <p className='email_verification_modal_need'>You need to verify your email to complete registration</p>
                    <div className='email_verification_modal_image_container'>
                        <img src='../../images/verifyEmail.png' alt='verification' />
                    </div>
                    <p className='email_verification_modal_info'>
                    An email has benn sent to with a link to verify your account. If you have not recieved the email after a few minutes. Please check your Spam folder or click on resend email.
                    </p>
                    <button className='email_verification_modal_button' onClick={()=> verifyEmail()} >
                        Verify Email
                    </button>

                </div>
            </div>
           
            
            

            
            
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default EmailVerificationModal