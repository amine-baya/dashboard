import React from 'react'
import './dashboardNavbar.css'

const DashboardNavbar = () => {
  return (
    <div id='dashboard_navbar'>
      <div className='dashboard_navbar_container'>

      <div className="logo_dashboard_navbar">
            <img src='../../images/logo.png' alt='logo' /> 
        </div>
        <div className="menu_dashboard_navbar">
            <ul>
              <li><img src='../../images/calendar.png' alt='Calender' /> <span>Calender</span></li>
              <li><img src='../../images/profile.png' alt='Profile' /> <span>Profile</span></li>
              <li><img src='../../images/candidate.png' alt='Candidates' /> <span>Candidates</span></li> 
            </ul> 
        </div>

      </div>
      
    </div>
  )
}

export default DashboardNavbar