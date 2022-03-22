import React, { useEffect, useState } from 'react'
import './Education.css'
import { Form } from 'react-bootstrap'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import axios from 'axios'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'


const Education = () => {

  const [school, setSchool] = useState([])
  const [degree, setDegree] = useState([])


   useEffect(() =>  {

      let one = "https://toptal-node.herokuapp.com/api/v1/school"
      let two = "https://toptal-node.herokuapp.com/api/v1/degree"
      

      const requestOne =    axios.get(one);
      const requestTwo =    axios.get(two);
      

      axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        setSchool(responses[0].data)
        setDegree(responses[1].data)
       
          
      
      })).catch(errors => {
      
          console.log("must verify the url");
        })
      }, [])

 
  


  
  return (
    <>
    <Header />
    <div className='container' id='Education'>
        <div className='Education_container'>
            <Title title="Education" />

                <h3>Tell us your most notable work experinces.</h3>
                <div className='Education_location'>
                <div className='Education_grid'>
                <div>
                  <label >School</label>
                  <Form.Select aria-label="Default select example">
                  <option>University/School Name</option>
                  { school?.map((el)=>(
                    <option value={el.school}>{el.school}</option> 
                    ))}
                  
                </Form.Select>
                </div>
                <div>
                  <label >Education Level Attained</label>
                  <Form.Select aria-label="Default select example">
                  <option>Select Degree</option>
                  { degree?.map((el)=>(
                    <option value={el.degree}>{el.degree}</option> 
                    ))}
                </Form.Select>
                </div>
                </div>
            </div>

            <h4>Dates Attended</h4>
            <div className='Portfolio_paragraph_grid'>
            <DatePickerComponent placeholder='From' onChange={(e) => console.log(e.target.value)}></DatePickerComponent>
                <DatePickerComponent placeholder='To'></DatePickerComponent>
            </div>
           
        </div>
            <Button text="Done"/>
    </div>
    </>
  )
}

export default Education