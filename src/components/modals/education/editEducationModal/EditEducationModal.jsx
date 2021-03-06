import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import useAuth from '../../../../hooks/useAuth'
import CustomSelect from '../../../CustomSelect'
import './editEducationModal.css'

const EditEducationModal = (props) => {

      
  const {userInfo, setDashbordEdit, dashbordEdit} = useAuth()
  const [schoolVal, setschoolVal] = useState("")
  const [degreeVal, setdegreeVal] = useState("")
  const [date_education_from, setdate_education_from] = useState("")
  const [date_education_to, setdate_education_to] = useState("")
  const [school, setSchool] = useState([])
  const [degree, setDegree] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


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


    useEffect(()  =>  {
      const config = {
          headers: {
           'Content-Type' : 'application/json',
            Authorization: ` Bearer ${userInfo?.token}`,
          },
        }

       axios.get(`https://toptal.ibrcloud.com/api/v1/user/education/${props?.id}`, config).then(res =>{    
        setschoolVal(res.data.school)
        setdegreeVal(res.data.degree)
        setdate_education_from(res.data.from)
        setdate_education_to(res.data.to)
      }).catch(err =>{
          console.log(err);
      })
    
}, [props?.id, userInfo?.token])


  const updateEducation = ()=>{

    const config = {
      headers: {
       'Content-Type' : 'application/json',
        Authorization: ` Bearer ${userInfo?.token}`,
      },
    }

    const educations =  {
      school: schoolVal,
      degree : degreeVal,
      date_education_from: date_education_from,
      date_education_to: date_education_to,
   
 } 

    axios.patch(`https://toptal.ibrcloud.com/api/v1/user/education/${props?.id}`,educations, config).then(res => {
      setDashbordEdit(!dashbordEdit)
      setSearchTerm("")
      
  }).catch(err =>{
      console.log(err.response);
   })
   props.onHide()
   
  }

  
const hireFromdateHandaler = (e) => {
  const offset = e.target.value.getTimezoneOffset()
  e.target.value = new Date(e.target.value.getTime() - (offset*60*1000))
  setdate_education_from( e.target.value.toISOString().split('T')[0])


}

const hireTodateHandaler = (e) => {
  const offset = e.target.value.getTimezoneOffset()
  e.target.value = new Date(e.target.value.getTime() - (offset*60*1000))
  setdate_education_to( e.target.value.toISOString().split('T')[0])

} 

const enddate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())



/********************************************* */

const [formData, setFormData] = useState({
  countryOne: {
    value: '',
    error: ''
  }
});

const [formDataDegree, setFormDataDegree] = useState({
  countryOne: {
    value: '',
    error: ''
  }
});
const changeHandler = (value, name) => {
  setFormData(prev => ({
    ...prev,
    [name]: {
      value,
      error: value !== '' ? '' : prev[name].error
    }
  }));
  setschoolVal(value)
}

const changeHandlerDegree = (value, name) => {
  setFormDataDegree(prev => ({
    ...prev,
    [name]: {
      value,
      error: value !== '' ? '' : prev[name].error
    }
  }));
  setdegreeVal(value)
}

/********************************************* */
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
         

                <CustomSelect 
                  label="School"
                  data={school}
                  value={formData.countryOne.value}
                  onChange={changeHandler}
                  //error={formData.countryOne.error}
                  defaultOptionLabel={schoolVal}
                  name="countryOne"
                />

                <CustomSelect 
                  label="Degree"
                  data={degree}
                  value={formDataDegree.countryOne.value}
                  onChange={changeHandlerDegree}
                  //error={formData.countryOne.error}
                  defaultOptionLabel={degreeVal}
                  name="countryOne"
                />

                <label className='label_select_modal label_select_education_dates'>Dates Attended</label>
            <div className='edit_education_dates_grid'>
            
                <DatePickerComponent max={enddate} value={date_education_from} placeholder='From' onChange={(e) =>  hireFromdateHandaler(e)}></DatePickerComponent> 
                <DatePickerComponent   min={date_education_from} max={enddate} value={date_education_to} placeholder='To' onChange={(e) => hireTodateHandaler(e)}></DatePickerComponent>
            </div>
            
            {/* <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button> */}
            <div >
                <button className='large_button' onClick={(e) => updateEducation()}  >
                    Save Details
                </button>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default EditEducationModal