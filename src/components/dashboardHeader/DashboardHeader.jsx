import React from 'react'
import { UserInfo } from '../../helpers/ContextApi'
import useAuth from '../../hooks/useAuth'
import './dashboardHeader.css'


const DashboardHeader = () => {
  const {personalData} = useAuth(UserInfo)
 
 
  console.log(personalData?.profile);

  return (
    <>
    <div className='container_dashboard_right'>
        <div>hide hashboard</div>
        
        <div id='Dashboard_Header'>
            <div className='search_data' >
                <img src='../../images/search.png' alt='search'  /> 
                <input type="search" placeholder='Search Data'   />
            </div>
            <div className="Dashboard_Header_notification">
              <ul>
                <li><img src='../../images/notification.png' alt='notification' /></li>
                <li className='Dashboard_Header_profile_image'><img src={personalData && personalData.profile }  alt='profile' /> <span>{personalData?.first_name}</span></li>
                <li><img src='../../images/drop_down_header.png' alt='drop down ' /></li> 
              </ul> 
            </div>
        </div>

    </div>
    </>

  )
}

export default DashboardHeader