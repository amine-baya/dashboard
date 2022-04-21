import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import DashboardNavbar from '../../components/dashboardNavbar/DashboardNavbar'
import Title from '../../components/title/Title'
import useAuth from '../../hooks/useAuth'
import './profile.css'

const ProfileScreen = () => {
    const {personalData} = useAuth()
    let navigate = useNavigate()
    console.log(personalData);

  return (
      <>
      <DashboardNavbar />
      <DashboardHeader />
    <div className='container_dashboard_right'>
        <div></div>
        <div id='profile'>
            <Title title="Edit Profile" />
            <div className='profile_container'>
            <div className='profile_box'>
                <div className='profile_box_name_img'>
                    <div> <img src={personalData.profile ? personalData.profile : "../../images/main_profile.png"} alt="profile" /> </div>
                    <div className='profile_box_name'>
                        <h3>{personalData.first_name} {personalData.last_name}</h3>
                        <span>{personalData.professional_role}</span>
                    </div>
                </div>
                <div>
                    <span className='profile_box_btn' onClick={()=>{navigate('/profile-edit')}}>Edit Profile</span>
                </div>
            </div>
            <div className="profile_box_content">
                <div><span>Email</span> <p>{personalData.email}</p></div>
                <div><span>Phone</span> <p>{personalData.mobile}</p></div>
                <div><span>Address</span> <p>{personalData.address}</p></div>

            </div>
            </div>
        </div>

    </div>
      </>
  

  )
}

export default ProfileScreen