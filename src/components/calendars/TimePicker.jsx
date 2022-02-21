import React from 'react'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './calendars.css';

const TimePicker = ({placeH}) => {
  return (
    <div className='control-section'>
        <div className='timepicker-control-section'>
            <TimePickerComponent placeholder={placeH}></TimePickerComponent>
        </div>
    </div>
  )
}

export default TimePicker