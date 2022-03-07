import React from 'react'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import DashboardNavbar from '../../components/dashboardNavbar/DashboardNavbar'
import './calender.css'

const Calender = () => {
  return (
    <>
        <DashboardNavbar />
      <DashboardHeader />
      <div className='container_calender'>
        <div></div>
        <div id='calender' className='calender'>
            hello
        </div>
    </div>
    </>
  )
}

export default Calender