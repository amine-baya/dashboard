import React, { useEffect, useState } from 'react'
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Modal } from 'react-bootstrap'
import Kpi5 from '../../../kpi5/Kpi5'
import './newEmploymentModal.css'
import useAuth from '../../../../hooks/useAuth'
import axios from 'axios'

const NewEmploymentModal = (props) => {


  const {userInfo, select3, setSelect3} = useAuth()
  const [ isEmployed, setIsEmployed] = useState()
  const [ positionName,setPositionName] = useState()
  const [ hireFrom,setHireFrom] = useState()
  const [ hireTo, setHireTo] = useState()
   

  const [skils, setskils] = useState()
  const [mySkills, setMySkills] = useState([])

    useEffect(() => {
    setMySkills([ {
        options: "skills",
        subcategory: [...select3]
      } ])
    }, [ select3])


    useEffect(() => {
        axios.get('https://toptal.ibrcloud.com/api/v1/projects/get-skills').then(res =>{
            setskils(res.data)
            
        }).catch(err =>{
          console.err("must verify the url");
        })
      }, [])
  



  const addEmployment = ()=>{

    const config = {
      headers: {
       'Content-Type' : 'application/json',
        Authorization: ` Bearer ${userInfo?.token}`,
      },
    }

    const employments =  {
      current_employed: isEmployed,
      position:positionName,
      date_hire_from: hireFrom,
      date_hire_to: hireTo,
      skills: mySkills
      }

    axios.post(`https://toptal.ibrcloud.com/api/v1/user/employment`,employments, config).then(res => {
      console.log("done"); 
  }).catch(err =>{
      console.log(err.response.data);
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
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add New Employment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            
            <div className='edit_inputs_project' >
                <label>
                    Are you currently employed in this position?
                </label>
               
                <div className='edit_inputs_project_checkbox' >
                    <div>
                        <input type="radio" name="check" value="yes" checked={isEmployed === "yes" && true} onChange={(e)=>{setIsEmployed(e.target.value)} } />
                        <label htmlFor="check">Yes</label>
                    </div>
                    <div>
                        <input type="radio" name="check" value="no" checked={isEmployed=== "no" && true} onChange={(e)=>{setIsEmployed(e.target.value)} } />
                        <label htmlFor="check">No</label>
                    </div>
                </div>
                <div className='input_component'>
                  <label className='label'>Position you are hired as</label>
                  <input type="text" placeholder="Position" value={positionName} onChange={(e) => setPositionName(e.target.value)}/>
                </div> 
        
            <label className=' label_select_employment_dates'>Dates Attended</label>
            <div className='edit_employment_dates_grid'>
            
            <DatePickerComponent value={hireFrom} placeholder='From' onChange={(e) => setHireFrom(new Date(e.target.value).toISOString().slice(0, 10))}></DatePickerComponent>
            <DatePickerComponent value={hireTo} placeholder='To' onChange={(e) => setHireTo(new Date(e.target.value).toISOString().slice(0, 10))}></DatePickerComponent>
       
        </div>
            
            { <Kpi5  options={skils?.options} title={skils?.question_text} edit={true}/>  }

                

            </div>

            
            <div className='modal_buttons'>
                <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button>
                <button classsName="btn_cancel_save" onClick={() => addEmployment()}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default NewEmploymentModal