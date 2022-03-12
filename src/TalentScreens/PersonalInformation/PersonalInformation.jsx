import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import './PersonalInformation.css'
import { Form } from 'react-bootstrap'
import Kpi2 from '../../components/kpi2/Kpi2'
import axios from 'axios'

const PersonalInformation = () => {
  const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('https://toptal-node.herokuapp.com/api/v1/projects/all-Details').then(res =>{
          setData(res.data[1])
          console.log(res.data);
        }).catch(err =>{
          console.log("must verify the url");
        })
      }, [])
  return (
    <div>
          <Header /> 
    <div className='container' id='Personal_information'>
        <div className='Personal_information_container'>
            <h3>Personal Information</h3>
            <div className='Personal_information_title'>
                <h5>For the purpose of industry regulation, your details are required.</h5>
                <h4>Upload an image that clearly show your face. </h4>
           </div>
            <div className='Personal_information_info'> 
                <img src="../../images/profile-img.png" alt="profile" />
                <span><img src="../../images/plus-blue.png" alt="plus" /> Add Profile Photo</span>
            </div>
            <div className='Personal_information_age'>
              <h5>What is your age?</h5>
              <div>
                <span className='item'> 21-30  <img src="../../images/plus.png" alt="plus" /></span>
                <span className='item'> 31-40 <img src="../../images/plus.png" alt="plus" /></span>
                <span className='item'> 41-50 <img src="../../images/plus.png" alt="plus" /></span>
                <span className='item'> 51-60 <img src="../../images/plus.png" alt="plus" /></span>
              </div>
            </div>

            <div className='Personal_information_location'>
              <h3>Current location:</h3>
                <div className='Personal_information_grid'>
                <div>
                  <label >Country</label>
                  <Form.Select aria-label="Default select example">
                  <option>select</option>
                  <option value="1">Sales-Bussiness development Manager, Sales Director, Sales Executive</option>
                  <option value="2">Developer-front-end, back-end, full-stack, mobile etc</option>
                  <option value="3">Marketing-digital marketers, marketing managers, SEO</option>
                </Form.Select>
                </div>
                <div>
                  <label >City or State</label>
                  <Form.Select aria-label="Default select example">
                  <option>select</option>
                  <option value="1">Sales-Bussiness development Manager, Sales Director, Sales Executive</option>
                  <option value="2">Developer-front-end, back-end, full-stack, mobile etc</option>
                  <option value="3">Marketing-digital marketers, marketing managers, SEO</option>
                </Form.Select>
                </div>
                </div>
            </div>
           <h4>Select industries you have worked with:</h4>
           { data?.options?.map((option)=>(
            <Kpi2 title={option.name} options={option.subcategory}  />

            ))}
        </div>
            <Button text="Next: Portfolio"/>
    </div>
    </div>
  )
}

export default PersonalInformation