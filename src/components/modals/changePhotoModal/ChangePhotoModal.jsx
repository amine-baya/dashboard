import React from 'react'
import { Modal } from 'react-bootstrap'
import './changePhotoModal.css'


const ChangePhotoModal = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Change Profile Photo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div className='change_photo_modal_container' >
                <div className='change_photo_modal_img' >
                    <img src="../../images/preview-img.png" className='change_photo_modal_img_profile' alt="profile" />
                    <img src="../../images/edit_photo.png" className='change_photo_modal_img_edit' alt="profile" />
                </div>
                <div className='change_photo_modal_rules' >
                    <p>Your photo should:</p>
                    <label>Be a close-up of your face</label>
                    <label>Show your face clearly - no sunglasses!</label>
                    <label>Be clear and crisp</label>
                    <label>Have a neutral background</label>
                </div>

                <div className='modal_buttons modal_buttons_photo_modal'>
                    <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button>
                    <button classsName="btn_cancel_save" onClick={props.onHide}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
                </div>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default ChangePhotoModal