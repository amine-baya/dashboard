import React from 'react'
import LargeButton from '../../components/largeButton/LargeButton'
import './dateAndTime.css'

const DateAndTime = () => {
  return (
    <div id='dateandtime' className='container'>
        <div className='date_and_time_part1'>
            <p>
                Details of your meeting to discuss hiring for Sales - Business Development Manager, Sales Director, Sales Executives
            </p>
            <img src='images/edit.png' alt="edit" />
        </div>
        <div className='date_and_time_part2'>
            <p>
            <img src='images/calendar.png' alt="calendar" />
            Hiring for Sales - Business Development Manager, Sales Director, Sales Executives
            </p>
            
        </div>
        <div className='date_and_time_part3'>
            <p>
            <img src='images/time.png' alt="time" />
                Thursday, October 14, 2021, 7:30 AM — 8:00 AM  (Asia/Karachi)
            </p>
            
        </div>

        <div className='date_and_time_part4'>
            <p>
            Let's discuss hiring for Sales - Business Development Manager, Sales Director, Sales Executives. To enter meeting, click https://zoom.us/j/8762537897 password: 805730
            </p>
            
        </div>
        <LargeButton text="Submit" />

        <button className='date_and_time_back_btn'>
            Back
        </button>
        
    </div>
  )
}

export default DateAndTime