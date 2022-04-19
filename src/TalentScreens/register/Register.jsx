import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate,useSearchParams,useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import  { useLinkedIn } from 'react-linkedin-login-oauth2';
import useAuth from '../../hooks/useAuth'
import _ from 'lodash'



import './register.css'

const Register = () => {

  const {userInfo,setUserInfo} = useAuth()
  //const {userInfo,setUserInfo} = useContext(UserInfo)
  const [roles,serRoles] = useState([])
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [professional,setProfessional] = useState('')
  const [role, setrole] = useState('isTalent')
  const [searchParams, setSearchParams] =useSearchParams()
  const [aww,setAw] = useState('')

  let navigate = useNavigate()

  
  
  const token = searchParams.get('auth_token')


useEffect(() => {   
  if(token !== null ){

    console.log(token)
  setAw(token)
  const config = {
    headers: {
        Authorization: ` Bearer ${token}`
    }
}
  console.log(config);
  axios.get('https://toptal.ibrcloud.com/api/v1/auth/linkedin-user',config).then(res =>{
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


 

   const { linkedInLogin } = useLinkedIn({
     clientId: '78m6p6keu2thh4',
     clientSecret: 'yBPGsFCpqVMuXc8M',
     scope:'r_liteprofile r_emailaddress',
     redirectUri: `http://localhost:3000/linkedin`,
     onSuccess: (code) => {
       console.log(code,"hello");
       const config = {
         headers: {
           "Content-Type": `application/x-www-form-urlencoded`,
           "Access-Control-Allow-Origin": "*",
           Authorization: `Bearer ${code}`
         },
       }
    
       axios.get('https://www.linkedin.com/oauth/v2/accessToken',{mode: 'no-cors'}, {grant_type: "authorization_code", code, redirect_uri: "http://localhost:3000/linkedin", client_id: "78m6p6keu2thh4", client_secret: "yBPGsFCpqVMuXc8M"} , config).then(res =>{
         console.log(res);
        
     }).catch(err =>{
       console.log(err);
     })
     },
     onError: (error) => {
       console.log(error);
      
     },
   });

 

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
                    <span className='btn_linkedin'><a href='https://toptal.ibrcloud.com/api/v1/auth/login-linkedin' ><span>in</span> Sign In with Linkedin</a>  </span>
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