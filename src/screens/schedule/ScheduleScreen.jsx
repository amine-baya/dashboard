import React from 'react'
import Button from '../../components/button/Button'
import Calendars from '../../components/calendars/Calendars'
import TimePicker from '../../components/calendars/TimePicker'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'
import './schedule.css'

const ScheduleScreen = () => {
  return (
    <>
    <Header /> 
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
              <h6>Date</h6>
              <Calendars/>
              <h6>Time</h6>
              <div className='schedule_calend_grid'>
                <TimePicker placeH='From'/>
                <TimePicker placeH='To'/>
              </div>
            </div>
        </div>
            <Button text="Next: Schedule" nav='/date-and-time'/>
    </div>
    </>
  )
}

export default ScheduleScreen