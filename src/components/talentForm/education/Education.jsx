import React, { useContext, useEffect, useState } from 'react'
import './Education.css'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import Title from '../../title/Title'
import { TalentContextApi, UserInfo } from '../../../helpers/ContextApi'

const Education = () => {
  const {userInfo} = useContext(UserInfo)
  const {schoolVal, setschoolVal, degreeVal, setdegreeVal, date_education_from, date_education_to, setdate_education_from, setdate_education_to} = useContext(TalentContextApi)
  const [school, setSchool] = useState([])
  const [degree, setDegree] = useState([])
  const {setTalentPage} = useContext(TalentContextApi)
 


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

      const submitHandler = async (e) => {

        e.preventDefault()
        setTalentPage((currPage) => currPage + 1)
  
        const config = {
            headers: {
           'Content-Type': 'application/json',
           Authorization: ` Bearer ${userInfo.token}`,
   
            },
        }
          await axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-information', {school: schoolVal, degree: degreeVal, date_education_from, date_education_to},  config).then(res => {
          
    
          
      }).catch(err =>{
          console.err(err);
       })
    }
  
  return (
    <>
    <div className='container' id='Education'>
        <div className='Education_container'>
            <Title title="Education" />

                <h3>Tell us your most notable work experinces.</h3>
                <div className='Education_location'>
                <div className='Education_grid'>
                <div>
                  <label >School</label>
                  <Form.Select aria-label="Default select example" value={schoolVal} onChange={(e) => setschoolVal(e.target.value)}>
                  <option value= "Null">University/School Name</option>
                  { school?.map((el,index)=>(
                    <option key={index} value={el.school}>{el.school}</option> 
                    ))}
                  
                </Form.Select>
                </div>
                <div>
                  <label >Education Level Attained</label>
                  <Form.Select aria-label="Default select example" value={degreeVal} onChange={(e) => setdegreeVal(e.target.value)}>
                  <option>Select Degree</option>
                  { degree?.map((el,index)=>(
                    <option key={index} value={el.degree}>{el.degree}</option> 
                    ))}
                </Form.Select>
                
                </div>
                </div>
            </div>

            <h4>Dates Attended</h4>
            <div className='Portfolio_paragraph_grid'>
            <DatePickerComponent placeholder='From' value={date_education_from} onChange={(e) => setdate_education_from(new Date(e.target.value).toISOString().slice(0, 10))}></DatePickerComponent>
            <DatePickerComponent placeholder='To' value={date_education_to} onChange={(e) => setdate_education_to(new Date(e.target.value).toISOString().slice(0 ,10))}></DatePickerComponent>
            </div>
           
        </div>
        <div>
          <span className='hr'></span>
          <div className='btn_contaienr'>
              <span className='btn_span btn_1' onClick={() => setTalentPage((currPage) => currPage - 1)} >Back</span>
              <span className='btn_span btn_2' onClick={(e) => submitHandler(e)} >Done</span>
          </div>
        </div>
    </div>
    </>
  )
}

export default Education