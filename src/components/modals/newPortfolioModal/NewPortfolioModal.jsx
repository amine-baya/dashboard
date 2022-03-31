import React from 'react'
import { Modal } from 'react-bootstrap'
import Input from '../../input/Input'
import Kpi2 from '../../kpi2/Kpi2'
import TextArea from '../../textarea/TextArea'
import {PortfolioData} from  '../../../kpisInfo'
import './newPortfolioModal.css'
import UploadInput from '../../uploadInput/UploadInput'

const NewPortfolioModal = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add New Project
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            
            <div className='edit_inputs_project' >
            <Input label="Project Name" placeH="Enter Project Name" type="text" /> 
            <UploadInput />

            <TextArea label="Short Description" placeH="Add short description" />
            
            { <Kpi2 title={PortfolioData[0].title} options={PortfolioData[0].options}  /> }
                

            </div>

            
            <div className='modal_buttons'>
                <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button>
                <button classsName="btn_cancel_save" onClick={props.onHide}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default NewPortfolioModal