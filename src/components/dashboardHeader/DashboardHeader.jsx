import React from 'react'
import Input from '../input/Input'
import './dashboardHeader.css'


const DashboardHeader = () => {
  return (
    <>
    <div className='container_dashboard_right'>
        <div>hide hashboard</div>
        
        <div id='Dashboard_Header'>
            <div className='search_data' >
                <img src='../../images/search.png' alt='search'  /> 
                <input type="search" placeHolder='Search Data'   />
            </div>
            <div className="Dashboard_Header_notification">
              <ul>
                <li><img src='../../images/notification.png' alt='notification' /></li>
                <li><img src='../../images/profile_img_header.png' alt='profile' /> <span>Ashley H.</span></li>
                <li><img src='../../images/drop_down_header.png' alt='drop down ' /></li> 
              </ul> 
            </div>
        </div>

    </div>
    </>

  )
}

export default DashboardHeader