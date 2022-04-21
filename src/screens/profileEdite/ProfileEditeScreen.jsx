import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../../components/title/Title'
import DashboardNavbar from '../../components/dashboardNavbar/DashboardNavbar'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import './profileEdite.css'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'

const ProfileEdite = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [image,setImage] = useState()
  const { personalData,userInfo} = useAuth()
  let navigate = useNavigate()

  useEffect(() => {

    if(personalData){

        setFirstName(personalData.first_name)
        setLastName(personalData.last_name)
        setEmail(personalData.email)
        setPhoneNumber(personalData.mobile)
        setImage(personalData.profile)
    }
  }, [personalData])



  const uploadFileHandler = async (e) => {
    const files = e.target.files
    const formData = new FormData()
    formData.append('image', files[0])

       const config = {
         headers: {
           Authorization: ` Bearer ${userInfo.token}`,
           'Content-Type': 'multipart/form-data',
         },
       }
       await axios.post('https://toptal.ibrcloud.com/api/v1/user/portfolio-image-uploads',formData, config).then(res => {
         setImage(res.data.image[0])
     
     }).catch(err =>{
       console.log(err.response.data);
    })
}

const updateFileHandler = async (e) => {

if(image !== undefined ){

      const config = {
        headers: {
          Authorization: ` Bearer ${userInfo.token}`,
        },
      }
      await axios.post('https://toptal.ibrcloud.com/api/v1/user/change-profile-picture',{profile:image}, config).then(res => {
        console.log(res)

    }).catch(err =>{
      console.log(err.response.data);
    })
    
  }
  
}
   
  const updateProfile = async ()=>{

    updateFileHandler()

      const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: ` Bearer ${userInfo?.token}`,
        }
    }
     await axios.patch('https://toptal.ibrcloud.com/api/v1/user/update-profile', {first_name:firstName, last_name:lastName, email,mobile:parseInt(phoneNumber)}, config).then(res =>{
     console.log(res.data);
     navigate('/profile')
  }).catch(err =>{
    console.log(err.response.data);
  })
  }



  return (
      <>
      <DashboardNavbar />
      <DashboardHeader />
       <div className='container_dashboard_right'>
        <div></div>
        <div id='eprofile'>
            <Title title="Edit Profile" />
            <div className='eprofile_container'>
            <div className='eprofile_box'>
                <div className='eprofile_box_name_img'>
                   <img src={image ? image : "../../images/main_profile.png"} alt="profile" className='eprofile_box_name_img_profile' />
                    <input type="file" id='file' className='upload_about_me' accept='image/*'  onChange={uploadFileHandler} />
                   <label  htmlFor="file"> <img src="../../images/camera.png" alt="profile" /></label>
                </div>
                
            </div>

            <div className="eprofile_box_content">
                <div className='input_component'>
                    <label className='label'>First Name</label>
                    <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                 <div className='input_component'>
                    <label className='label'>Last Name</label>
                    <input type="text" placeholder="Enter Last Name " value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                 </div>
                <div className='eprofile_box_content_grid'>
                    <div className='input_component'>
                        <label className='label'>Email </label>
                        <input type="email" placeholder="Enter Email Address " value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='input_component'>
                            <label className='label'>Phone No</label>
                            <input type="tel" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                </div>

            </div>
            <span className='eprofile_container_btn' onClick={()=>{updateProfile()}}>Save Changes</span>
            </div>
        </div>

    </div>
      </>
  

  )
}

export default ProfileEdite