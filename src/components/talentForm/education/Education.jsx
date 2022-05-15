import React, { useEffect, useState } from 'react'
import './Education.css'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import Title from '../../title/Title'
import useAuth from '../../../hooks/useAuth'
import useTalent from '../../../hooks/useTalent'

const Education = () => {
  const {userInfo} = useAuth()
  const {setTalentPage,schoolVal, setschoolVal, degreeVal, setdegreeVal, date_education_from, date_education_to, setdate_education_from, setdate_education_to} = useTalent()
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

      const submitHandler = async (e) => {

        e.preventDefault()
        setTalentPage((currPage) => currPage + 1)

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

        if(schoolVal === ""  || degreeVal ==="" || date_education_from === ""  || date_education_to ===""   ) {
          console.log("verify inputs");
      }
      else{
          await axios.post('https://toptal.ibrcloud.com/api/v1/user/education',educations,  config).then(res => {
          
            console.log("done");
            setschoolVal("")
            setdegreeVal("")
            setdate_education_from("")
            setdate_education_to("")
          
      }).catch(err =>{
          console.err(err);
       })
      }
    }


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

        if(schoolVal === ""  || degreeVal ==="" || date_education_from === ""  || date_education_to ===""   ) {
          console.log("verify inputs");
      }
      else{
          axios.post('https://toptal.ibrcloud.com/api/v1/user/education', educations, config).then(res => {
          console.log("done");
          setschoolVal("")
          setdegreeVal("")
          setdate_education_from("")
          setdate_education_to("")

      }).catch(err =>{
          console.log(err.response);
       })
    }
    
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

  return (
    <>
    <div className='container' id='Education'>
        <div className='Education_container'>
            
            <div className='Personal_information_header'>
             
                  <>
                  <Title title="Education" />
                  <span className='addNewPeriod' onClick={()=>addNewEducation()}>add new</span>
                  </>

            </div>

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
                <DatePickerComponent max={enddate} value={date_education_from} placeholder='From' onChange={(e) =>  hireFromdateHandaler(e)}></DatePickerComponent> 
                <DatePickerComponent   min={date_education_from} max={enddate} value={date_education_to} placeholder='To' onChange={(e) => hireTodateHandaler(e)}></DatePickerComponent>
            
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