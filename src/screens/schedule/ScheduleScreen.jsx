import React from 'react'
import Calendars from '../../components/calendars/Calendars'
import Input from '../../components/input/Input'
import './schedule.css'

const ScheduleScreen = () => {
  return (
    <div className='container' id='schedule'>
        <div className='schedule_container'>
            <h2>Schedule</h2>
            <div className='schedule_info'>
              <h5>We found a professional. Let's connect you with this person.</h5>
              <Input label='Email*' placeH='Enter email'/>
              <Input label='Company name*' placeH='Enter email address'/>
              <Input label='Contact name*' placeH='Enter contact name'/>

              <p>By proceeding, you are agreeing to kimbocorpl’s <span>Terms of Service</span> and <span>Privacy Policy</span> and that kimbocorp may monitor or record audio or video calls for quality assurance and training purposes.</p>
            </div>
            <div className="schedule_calend">
              <h5>Choose a day to discuss hiring for Sales - Business Development Manager, Sales Director, Sales Executives</h5>
              <Calendars/>
            </div>
        </div>
    </div>
  )
}

export default ScheduleScreen