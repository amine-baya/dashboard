import axios from 'axios'
import React from 'react'
import { Modal } from 'react-bootstrap'
import useAuth from '../../../../hooks/useAuth'
import './removePortfolioModal.css'



const RemovePortfolioModal = (props) => {
    
    const {userInfo} = useAuth()

    const deletePortfolio = () => {
        const config = {
            headers: {
              Authorization: ` Bearer ${userInfo?.token}`,
              
            },
        }

        axios.delete(`https://toptal.ibrcloud.com/api/v1/user/portfolio/${props?.id}`, config).then(res =>{
          console.log("done");

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
                   <h2>Remove Portfolio </h2> 
                </div>
                <div className='remove_modal_p' >
                    <p>
                        Are you sure you want to remove 'Design Fronted 
                        developer' from your Portfolio?
                    </p>
                    
                </div>

                <div className='modal_buttons modal_buttons_photo_modal'>
                    <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button>
                    <button classsName="btn_cancel_save" onClick={() => deletePortfolio()}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
                </div>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default RemovePortfolioModal