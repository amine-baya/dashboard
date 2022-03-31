import React from 'react'
import { Modal, Form } from 'react-bootstrap'
import TimePicker from '../../calendars/TimePicker'
import LargeButton from '../../largeButton/LargeButton'
import './editEducationModal.css'

const EditEducationModal = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Edit Education
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <label className='label_select_modal'>School</label>
            <Form.Select aria-label="Default select example" className='form_select_modal'>
                <option>Open this select menu</option>
                <option value="1">Developer-front-end, back-end, full-stack, mobile etc</option>
                <option value="2">Marketing-digital marketers, marketing managers, SEO</option>
                <option value="3">Data analysts-data science, data visualisation, predictive analysis</option>
            </Form.Select>

            <label className='label_select_modal'>Education Level Attained</label>
            <Form.Select aria-label="Default select example" className='form_select_modal'>
                <option>Open this select menu</option>
                <option value="1">Developer-front-end, back-end, full-stack, mobile etc</option>
                <option value="2">Marketing-digital marketers, marketing managers, SEO</option>
                <option value="3">Data analysts-data science, data visualisation, predictive analysis</option>
            </Form.Select>

            <label className='label_select_modal label_select_education_dates'>Dates Attended</label>
            <div className='edit_education_dates_grid'>
                <TimePicker placeH='From'/>
                <TimePicker placeH='To'/>
            </div>
            
            {/* <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button> */}
            <LargeButton text="Save Details" />
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default EditEducationModal