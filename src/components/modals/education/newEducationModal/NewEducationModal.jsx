import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import useAuth from '../../../../hooks/useAuth'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import './newEducationModal.css'
import CustomSelect from '../../../CustomSelect'

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
                Add New Education
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
                <button className='large_button' onClick={(e) => addNewEducation()}  >
                    Save Details
                </button>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default NewEducationModal