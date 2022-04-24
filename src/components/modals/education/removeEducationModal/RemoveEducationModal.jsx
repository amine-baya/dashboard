import axios from 'axios'
import React from 'react'
import { Modal } from 'react-bootstrap'
import useAuth from '../../../../hooks/useAuth'
import './removeEducationModal.css'



const RemoveEducationModal = (props) => {
    
  const {userInfo, dashbordEdit,setDashbordEdit} = useAuth()


    const deleteEducation = () => {
        const config = {
            headers: {
              Authorization: ` Bearer ${userInfo?.token}`,
              
            },
        }

        axios.delete(`https://toptal.ibrcloud.com/api/v1/user/education/${props?.id}`, config).then(res =>{
          console.log("done");
          setDashbordEdit(!dashbordEdit)

        }).catch(err =>{
            console.log("must verify the url");
            console.log(err);
        })

    props.onHide()

        
    }


    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >

          <Modal.Body>

            <div className='remove_modal_container' >
                <div className='remove_modal_title' >
                   <h2>Remove Education </h2> 
                </div>
                <div className='remove_modal_p' >
                    <p>
                        Are you sure you want to remove {props.name} from your Education?
                    </p>
                    
                </div>

                <div className='modal_buttons modal_buttons_photo_modal'>
                    <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button>
                    <button classsName="btn_cancel_save" onClick={() => deleteEducation()}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
                </div>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default RemoveEducationModal