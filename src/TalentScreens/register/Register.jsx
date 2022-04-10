import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { UserInfo } from '../../helpers/ContextApi'


import './register.css'

const Register = () => {

  const {userInfo,setUserInfo} = useContext(UserInfo)
  const [roles,serRoles] = useState([])
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [professional,setProfessional] = useState('')
  const [role, setrole] = useState('isTalent')
  let navigate = useNavigate()

  useEffect(() => {   
    console.log(userInfo?.token);
    if (userInfo?.token !== undefined) {
      navigate("/calender")
  }
        axios.get('https://toptal.ibrcloud.com/api/v1/roles/show_all_roles').then(res =>{
          serRoles(res.data[0].options)
          
        }).catch(err =>{
            console.err("must verify the url");
        })
        
    },[userInfo] )

  const submitHandler = async(e)=>{
    e.preventDefault()
      const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
     await axios.post('https://toptal.ibrcloud.com/api/v1/auth/register', {first_name:firstName, last_name:lastName, email, password,professional_role: professional, role}, config).then(res =>{
      setUserInfo(res.data)
      localStorage.setItem("userInfo", JSON.stringify(res.data))
      if (role === "isClient") {
        navigate('/client')
      } else {
        navigate('/talent')
      }
  }).catch(err =>{
    console.log(err.response.data);
  })
  }



  return (
    <div>
         <Header /> 
         <div className="to_account">
           <p>Already have an account? <span><Link to="/" >Sign In</Link></span> </p>
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
                  
                    <form onSubmit={submitHandler}>
                        
                          <label htmlFor="Your Professional fill?">Your Professional fill?</label>
                          <Form.Select aria-label="Default select example" onChange={(e) => setProfessional(e.target.value)}>
                              <option>select</option>
                              {
                                roles?.map((role)=>(
                                  <option key={role.identifier} value={role.identifier}>{role.name}</option>
                                  
                                ))
                              }
                              
                          </Form.Select>
                          <div className='input_component'>
                            <label className='label'>First Name*</label>
                            <input type="text" placeholder="Enter Full Name " onChange={(e) => setFirstName(e.target.value)}/>
                          </div>
                          <div className='input_component'>
                            <label className='label'>Last Name*</label>
                            <input type="text" placeholder="Enter Full Name " onChange={(e) => setLastName(e.target.value)}/>
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
                          <div className='register_role_checkbox' >
                              <div>
                                  <input type="radio" name="role" checked value="isTalent" onChange={(e)=>{setrole(e.target.value)} }/>
                                  <label htmlFor="role">Talent</label>
                              </div>
                              <div>
                                  <input type="radio" name="role" value="isClient" onChange={(e)=>{setrole(e.target.value)} }/>
                                  <label htmlFor="role">Client</label>
                              </div>
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