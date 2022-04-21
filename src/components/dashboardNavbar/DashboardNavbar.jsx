import React from 'react'
import { useNavigate } from 'react-router-dom'
import './dashboardNavbar.css'
import {ImProfile} from 'react-icons/im'
import {AiOutlineLogout} from 'react-icons/ai'
import useAuth from '../../hooks/useAuth'

const DashboardNavbar = () => {
  const {setUserInfo} = useAuth()

  let navigate = useNavigate()

  const logout =()=>{
    localStorage.removeItem("userInfo")
    setUserInfo()
    localStorage.removeItem("personalData")
    navigate("/")
  }
  return (
    <div id='dashboard_navbar'>
      <div className='dashboard_navbar_container'>

      <div className="logo_dashboard_navbar">
            <img src='../../images/logo.png' alt='logo' /> 
        </div>
        <div className="menu_dashboard_navbar">
            <ul>
              <li><img src='../../images/calendar.png' alt='Calender' /> <span>Calender</span></li>
              <li onClick={()=> navigate("/profile")}><img src='../../images/profile.png' alt='Profile' /> <span>Profile</span></li>
              <li><img src='../../images/candidate.png' alt='Candidates' /> <span>Candidates</span></li> 
              <li onClick={()=> navigate("/resume")}><ImProfile color="#A3AED0" size="1.7em" /> <span style={{paddingLeft:"20px"}}>resume</span></li> 
              <li onClick={()=> logout()}><AiOutlineLogout color="#A3AED0" size="1.7em" /> <span style={{paddingLeft:"20px"}}>logOut</span></li> 
            </ul> 
        </div>

      </div>
      
    </div>
  )
}

export default DashboardNavbar