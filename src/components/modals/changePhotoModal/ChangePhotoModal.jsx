import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import useAuth from '../../../hooks/useAuth'
import './changePhotoModal.css'


const ChangePhotoModal = (props) => {
  const [image,setImage] = useState()
  const {userInfo,personalData,dashbordEdit, setDashbordEdit} = useAuth()


  useEffect(() => {
    
    if(personalData){
      
      setImage(personalData.profile)
    }
    
  }, [personalData])


  const uploadFileHandler = async (e) => {
    const files = e.target.files
    const formData = new FormData()
    formData.append('image', files[0])

       const config = {
         headers: {
           Authorization: ` Bearer ${userInfo.token}`,
           'Content-Type': 'multipart/form-data',
         },
       }
       await axios.post('https://toptal.ibrcloud.com/api/v1/user/portfolio-image-uploads',formData, config).then(res => {
         setImage(res.data.image[0])
        



     
     }).catch(err =>{
       console.log(err.response.data);
    })
}

const updateFileHandler = async (e) => {

if(image !== undefined ){

      const config = {
        headers: {
          Authorization: ` Bearer ${userInfo.token}`,
        },
      }
      await axios.post('https://toptal.ibrcloud.com/api/v1/user/change-profile-picture',{profile:image}, config).then(res => {
        console.log("done")
        console.log(res)
        setDashbordEdit(!dashbordEdit)

    }).catch(err =>{
      console.log(err.response.data);
    })
    
    props.onHide()
  }
  
}




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
                    <img src={image ? image : "../../images/preview-img.png"} className='change_photo_modal_img_profile' alt="profile" />
                  <input type="file" id='file' className='upload_about_me' accept='image/*'  onChange={uploadFileHandler} />
                    <label htmlFor='file'><img src="../../images/edit_photo.png" className='change_photo_modal_img_edit' alt="profile" /></label>  
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
                    <button classsName="btn_cancel_save" onClick={() => updateFileHandler()}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
                </div>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default ChangePhotoModal