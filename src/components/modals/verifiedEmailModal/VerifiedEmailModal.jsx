import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { UserInfo } from '../../../helpers/ContextApi'
import './verifiedEmailModal.css'

const VerifiedEmailModal = (props) => {
  const {userInfo, setVerifiedEmailModalShow} = useContext(UserInfo)

    return (
        <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          
          <Modal.Body>
            <div id='email_verified_modal'>
                <div className='email_verified_modal_container'>
                    <div className='email_verified_modal_image_container'>
                        <img src='../../images/green.png' alt='completed' />
                        <img src='../../images/correctBig.png' alt='completed' className='email_verified_modal_image_correct' />

                    </div>
                    <h1>Verified!</h1>
                    <p >You have Successfully verified the account</p>
                   
                    <button className='email_verified_modal_button' onClick={() => setVerifiedEmailModalShow(false)}>
                        Go to Dashboard
                    </button>

                </div>
            </div>
           
            
            

            
            
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default VerifiedEmailModal