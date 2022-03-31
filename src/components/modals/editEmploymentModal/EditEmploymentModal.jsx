import React from 'react'
import { Modal } from 'react-bootstrap'
import Input from '../../input/Input'
import Kpi2 from '../../kpi2/Kpi2'
import {PortfolioData} from  '../../../kpisInfo'


import './editEmploymentModal.css'
import TimePicker from '../../calendars/TimePicker'

const EditEmploymentModal = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Edit Employment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            
            <div className='edit_inputs_project' >
                <label>
                    Are you currently employed in this position?
                </label>
               
                <div className='edit_inputs_project_checkbox' >
                    <div>
                        <input type="radio" name="check" />
                        <label htmlFor="check">Yes</label>
                    </div>
                    <div>
                        <input type="radio" name="check" />
                        <label htmlFor="check">No</label>
                    </div>
                </div>
            <Input label="Position you are hired as" placeH="Position" type="text" /> 
        
            <label className=' label_select_employment_dates'>Dates Attended</label>
            <div className='edit_employment_dates_grid'>
                <TimePicker placeH='From'/>
                <TimePicker placeH='To'/>
            </div>
            
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

export default EditEmploymentModal