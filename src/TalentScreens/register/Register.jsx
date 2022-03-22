import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'

import './register.css'

const Register = () => {

  let navigate = useNavigate()
  const [full_name,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [professional,setProfessional] = useState('')

  const submitHandler = async(e)=>{
    e.preventDefault()
    console.log(professional,full_name,email,password)
      const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const {data} = await axios.post('https://toptal-node.herokuapp.com/api/v1/auth/register', {full_name, email, password, professional}, config)
      console.log(data);
  }


  return (
    <div>
         <Header /> 
         <div className="to_account">
           <p>Already have an account? <span>Sign In</span> </p>
         </div>
        <div className='container' id='register'>
            <div className='register_container'>
                <h3>Register yourself on the network</h3>
                <div className='register_info'>
                  <h5>We provide access to top companies, a community of experts, and resources that can help accelerate your career.</h5>
                  <div className='in_register'>
                    <span className='btn_linkedin'> <span>in</span> Sign In with Linkedin </span>
                    <p>By clicking Sign in with linkedin, you agree to let Topptalent store your Linkedin Profile</p>
                    <span className='or'>Or</span>
                  </div>
                  <div className="nrl_register">
                  {/* <button class="select" name="select" value="options">options</button>
                        <div class="options">
                            <p class="item active">option 1</p>
                            <p class="item">option 2</p>
                            <p class="item">option 3</p>
                            <p class="item">option 4</p>
                        </div> */}
                    <form onSubmit={submitHandler}>
                        
                          <label htmlFor="Your Professional fill?">Your Professional fill?</label>
                          <Form.Select aria-label="Default select example" onChange={(e) => setProfessional(e.target.value)}>
                              <option>select</option>
                              <option value="Sales-Bussiness">Sales-Bussiness development Manager, Sales Director, Sales Executive</option>
                              <option value="Developer">Developer-front-end, back-end, full-stack, mobile etc</option>
                              <option value="Marketing">Marketing-digital marketers, marketing managers, SEO</option>
                          </Form.Select>
                          <div className='input_component'>
                            <label className='label'>Full Name*</label>
                            <input type="text" placeholder="Enter Full Name " onChange={(e) => setFullName(e.target.value)}/>
                          </div>
                          <div className='input_component'>
                            <label className='label'>Email Address*</label>
                            <input type="email" placeholder="Enter Email Address " onChange={(e) => setEmail(e.target.value)}/>
                          </div>
                          <div className='input_component'>
                            <label className='label'>Confirm Password*</label>
                            <input type="password" placeholder="Confirm Password" onChange={(e) => setPassword(e.target.value)}/>
                          </div>
                          <div>
                          <p>You acknowledge that the Topptalent screening process is confidential and that you will not publicly disclose details about this process. By submitting, you acknowledge that you have read and agreed to our <span>Terms and Conditions</span> , <span>Privacy Policy</span>, and <span>Cookie Policy</span>.</p>
                          </div>
                          <button className='large_button' type='submit'  >
                            Register Account
                          </button>
                    </form>

                
            </div>
            </div>
        </div>
        </div>
      </div>

  )
}

export default Register