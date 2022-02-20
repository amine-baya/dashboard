import React from 'react'
import { Modal, Form } from 'react-bootstrap'
import './modalP.css'

const ModalP = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Change skill category
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <label className='label_select_modal'>Category</label>
            <Form.Select aria-label="Default select example" className='form_select_modal'>
                <option>Open this select menu</option>
                <option value="1">Developer-front-end, back-end, full-stack, mobile etc</option>
                <option value="2">Marketing-digital marketers, marketing managers, SEO</option>
                <option value="3">Data analysts-data science, data visualisation, predictive analysis</option>
            </Form.Select>

            <label className='label_select_modal'>Speciality</label>
            <Form.Select aria-label="Default select example" className='form_select_modal'>
                <option>Open this select menu</option>
                <option value="1">Developer-front-end, back-end, full-stack, mobile etc</option>
                <option value="2">Marketing-digital marketers, marketing managers, SEO</option>
                <option value="3">Data analysts-data science, data visualisation, predictive analysis</option>
            </Form.Select>
            <div className='modal_buttons'>
            <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button>
            <button classsName="btn_cancel_save" onClick={props.onHide}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
            </div>

          </Modal.Body>
          
         
        </Modal>
      )
}

export default ModalP