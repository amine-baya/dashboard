import React from 'react'
import { Modal } from 'react-bootstrap'
import Input from '../../input/Input'
import Kpi2 from '../../kpi2/Kpi2'
import TextArea from '../../textarea/TextArea'
import {PortfolioData} from  '../../../kpisInfo'
import './editAboutModal.css'


const EditAboutModal = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Edit About
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            
            <div className='edit_inputs_project' >
            <Input label="Full Name" placeH="Austin Robertson" type="text" />
            <div className='edit_inputs_project_grid'>
                <Input label="Email address" placeH="nikijone@demoo.com" type="email" />
                <Input label="Mobile No" placeH="001235125612" type="mobile" />
            </div> 
            <Input label="Title that descibe you" placeH="Graphic designer" type="text" /> 

            <TextArea label="Short Description" placeH="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo" />
            <div className='edit_inputs_project_grid'>
                <Input label="City" placeH="New York" type="text" />
                <Input label="Country" placeH="Singapore" type="text" />
            </div> 
            </div>

            
            <div className='modal_buttons modal_buttons_edit_about'>
                <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button>
                <button classsName="btn_cancel_save" onClick={props.onHide}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default EditAboutModal