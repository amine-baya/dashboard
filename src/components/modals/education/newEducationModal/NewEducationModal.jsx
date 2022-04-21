import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import useAuth from '../../../../hooks/useAuth'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import './newEducationModal.css'

const NewEducationModal = (props) => {

  const {userInfo, dashbordEdit,setDashbordEdit} = useAuth()
  const [schoolVal, setschoolVal] = useState("")
  const [degreeVal, setdegreeVal] = useState("")
  const [date_education_from, setdate_education_from] = useState("")
  const [date_education_to, setdate_education_to] = useState("")
  const [school, setSchool] = useState([])
  const [degree, setDegree] = useState([])

 


   useEffect(() =>  {

      let one = "https://toptal.ibrcloud.com/api/v1/school"
      let two = "https://toptal.ibrcloud.com/api/v1/degree"
    
      const requestOne =    axios.get(one);
      const requestTwo =    axios.get(two);
  
      axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        setSchool(responses[0].data)
        setDegree(responses[1].data)
       
      })).catch(errors => {
      
          console.log("must verify the url");
        })
      }, [])



      const addNewEducation = async()=>{

        const educations =  {
            school: schoolVal,
            degree : degreeVal,
            date_education_from: date_education_from,
            date_education_to: date_education_to,
         
       } 
      
            const config = {
              headers: {
            'Content-Type': 'application/json',
            Authorization: ` Bearer ${userInfo.token}`,
      
              },
          }
  
          if(schoolVal === ""  || degreeVal ==="" || date_education_from === ""  || date_education_to === ""   ) {
            console.log("verify inputs");
        }
        else{
            axios.post('https://toptal.ibrcloud.com/api/v1/user/education', educations, config).then(res => {
            console.log("done");
            setDashbordEdit(!dashbordEdit)
            setschoolVal("")
            setdegreeVal("")
            setdate_education_from("")
            setdate_education_to("")
  
        }).catch(err =>{
            console.log(err.response);
         })
      }

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
                Add New Education
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

             <div>
                  <label className='label_select_modal'>School</label>
                  <Form.Select aria-label="Default select example" className='form_select_modal' value={schoolVal} onChange={(e) => setschoolVal(e.target.value)}>
                  <option value= "Null">University/School Name</option>
                  { school?.map((el,index)=>(
                    <option key={index} value={el.school}>{el.school}</option> 
                    ))}
                  
                </Form.Select>
              </div>

                <div>
                  <label className='label_select_modal' >Education Level Attained</label>
                  <Form.Select aria-label="Default select example" className='form_select_modal' value={degreeVal} onChange={(e) => setdegreeVal(e.target.value)}>
                  <option>Select Degree</option>
                  { degree?.map((el,index)=>(
                    <option key={index} value={el.degree}>{el.degree}</option> 
                    ))}
                </Form.Select>
                
                </div>

            <label className='label_select_modal label_select_education_dates'>Dates Attended</label>
            <div className='edit_education_dates_grid'>
            <DatePickerComponent placeholder='From' value={date_education_from} onChange={(e) => setdate_education_from(new Date(e.target.value).toISOString().slice(0, 10))}></DatePickerComponent>
            <DatePickerComponent placeholder='To' value={date_education_to} onChange={(e) => setdate_education_to(new Date(e.target.value).toISOString().slice(0 ,10))}></DatePickerComponent>
            </div>
            
            {/* <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button> */}
            <div >
                <button className='large_button' onClick={(e) => addNewEducation()}  >
                    Save Details
                </button>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default NewEducationModal