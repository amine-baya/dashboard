import React from 'react'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import './calendars.css';

const Calendars = () => {
  return (
    <div>
        <div className='control-section'>
            <div className='daterangepicker-control-section'>
                <DateRangePickerComponent placeholder='dd/mm/yyyy'></DateRangePickerComponent>
            </div>
        </div>
    </div>
  )
}

export default Calendars