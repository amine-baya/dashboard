import React from 'react'
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import DashboardNavbar from '../../components/dashboardNavbar/DashboardNavbar'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import './profileEdite.css'
const ProfileEdite = () => {
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
                   <img src="../../images/main_profile.png" alt="profile" />
                   <span> <img src="../../images/camera.png" alt="profile" /></span>
                </div>
                
            </div>
            <div className="eprofile_box_content">
                <Input placeH="Austin Robertson" label="Full Name"/>
                <div className='eprofile_box_content_grid'>
                <Input placeH="Austin Robertson" label="nikijone@demoo.com"/>
                <Input placeH="Austin Robertson" label="001235125612"/>
                </div>

            </div>
            <span className='eprofile_container_btn'>Save Changes</span>
            </div>
        </div>

    </div>
      </>
  

  )
}

export default ProfileEdite