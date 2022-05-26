import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate,useSearchParams } from 'react-router-dom'
import Header from '../../components/header/Header'

import useAuth from '../../hooks/useAuth'
import {BiShow,BiHide} from 'react-icons/bi'



import './register.css'

const Register = () => {

  const {userInfo,setUserInfo} = useAuth()
  //const {userInfo,setUserInfo} = useContext(UserInfo)
  const [roles,serRoles] = useState([])
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [address,setAddress] = useState('')
  const [phone,setPhoneNumber] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [professional,setProfessional] = useState('')
  const [role, setrole] = useState('isTalent')
  const [searchParams] =useSearchParams()
  const [aww,setAw] = useState('')
  const [show,setShow] = useState(true)

  let navigate = useNavigate()

  
  const token = searchParams.get('auth_token')


useEffect(() => {   
  if(token !== null ){

  setAw(token)
  axios.post('https://toptal.ibrcloud.com/api/v1/auth/linkedin-user',{token:token}).then(res =>{
    setUserInfo(res.data)
      localStorage.setItem("userInfo", JSON.stringify(res.data) )
      navigate('/talent')
    
  }).catch(err =>{
      console.log(err.response.data);
  })
  

  }
  
},[token, aww] )
   


  useEffect(() => {   
  
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
     await axios.post('https://toptal.ibrcloud.com/api/v1/auth/register', {first_name:firstName, last_name:lastName, email, password,professional_role: professional, role,mobile:parseInt(phone),address}, config).then(res =>{
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
                  <a href='https://toptal.ibrcloud.com/api/v1/auth/login-linkedin' ><span className='btn_linkedin'><span>in</span> Sign In with Linkedin  </span></a>
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
                                  <option key={role.identifier} value={role.name}>{role.name}</option>                                 
                                ))
                              }
                          </Form.Select>
                          <div className='input_component'>
                            <label className='label'>First Name*</label>
                            <input type="text" placeholder="Enter First Name " onChange={(e) => setFirstName(e.target.value)}/>
                          </div>
                          <div className='input_component'>
                            <label className='label'>Last Name*</label>
                            <input type="text" placeholder="Enter Last Name " onChange={(e) => setLastName(e.target.value)}/>
                          </div>
                          <div className='input_component'>
                            <label className='label'>Address</label>
                            <input type="text" placeholder="Enter Address " onChange={(e) => setAddress(e.target.value)}/>
                          </div>
                          <div className='input_component'>
                            <label className='label'>Phone Number</label>
                            <input type="tel" placeholder="Enter Phone Number " onChange={(e) => setPhoneNumber(e.target.value)}/>
                          </div>
                          <div className='input_component'>
                            <label className='label'>Email Address*</label>
                            <input type="email" placeholder="Enter Email Address " onChange={(e) => setEmail(e.target.value)}/>
                          </div>
                          <div className='input_component input_password_component'>
                            <label className='label'>Confirm Password*</label>
                            <input type={show  ? "password" : "text" } placeholder="Confirm Password" onChange={(e) => setPassword(e.target.value)}/>
                            { show === false ?
                            <BiShow onClick={()=>{setShow(true)}}  className='show_password' size="1.7em" />
                            :
                            <BiHide onClick={()=>{setShow(false)}}  className='show_password' size="1.7em" />
                            }
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