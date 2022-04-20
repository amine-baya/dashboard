import axios from 'axios'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import useAuth from '../../../hooks/useAuth'
import Input from '../../input/Input'
import TextArea from '../../textarea/TextArea'
import './editAboutModal.css'


const EditAboutModal = (props) => {

  const {personalData,userInfo} = useAuth()
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [title,setTitle] = useState('')
  const [aboutText, setAboutText] = useState("")
  const [countryVal, setCountryVal] = useState("")
  const [nationalityVal, setNationalityVal] = useState("")



 


  const updateAboutMe = ()=>{

    const config = {
      headers: {
       'Content-Type' : 'application/json',
        Authorization: ` Bearer ${userInfo?.token}`,
      },
    }

    const aboutUs =  {
      first_name: firstName,
      last_name:lastName,
      email: "abaya6054@gmail.com",
      mobile: phone,
      professional: "web developer",
      about_self: aboutText,
      country: countryVal,
      state: nationalityVal
      }

    axios.patch(`https://toptal.ibrcloud.com/api/v1/user/about-us-update`,aboutUs, config).then(res => {
      console.log(res.data); 
  }).catch(err =>{
      console.log(err.response);
   })
   props.onHide()
   
  }







    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Edit About
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            
            <div className='edit_inputs_project' >
            <div className='input_component'>
                  <label className='label'>First Name</label>
                  <input type="text"  value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>

             <div className='input_component'>
                  <label className='label'>Last Name</label>
                  <input type="text"  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div> 

            <div className='edit_inputs_project_grid'>
                
                <div className='input_component'>
                      <label className='label'>Email address</label>
                      <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div> 
                <div className='input_component'>
                      <label className='label'>Mobile No</label>
                      <input type="mobile"  placeholder='001235125612' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div> 
            </div> 
            <div className='input_component'>
                      <label className='label'>Title that descibe you</label>
                      <input type="email"  value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div> 
            
            <label className='label'>Short Description.</label>

            <textarea id="areaText" name="story" placeholder='Tell us about yourself.' value={aboutText} onChange={(e)=>setAboutText(e.target.value)} >
                  
            </textarea> 
            <div className='edit_inputs_project_grid'>
                
                <div className='input_component'>
                      <label className='label'>Nationality</label>
                      <input type="email"  value={nationalityVal} onChange={(e) => setNationalityVal(e.target.value)}/>
                </div>
                <div className='input_component'>
                          <label className='label'>Country</label>
                          <input type="email"  value={countryVal} onChange={(e) => setCountryVal(e.target.value)}/>
                </div>
            </div> 
            </div>

            
            <div className='modal_buttons modal_buttons_edit_about'>
                <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button>
                <button classsName="btn_cancel_save" onClick={() => updateAboutMe()}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default EditAboutModal