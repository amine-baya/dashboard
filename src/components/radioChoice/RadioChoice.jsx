import React from 'react'
import './radioChoice.css'

const RadioChoice = (props) => {
  return (
      
    <>
    {
      props.options.map((option)=>(
        <div className='radio_details'>
            <input type="radio"/>
            <p>{option}</p>
        </div>
        ))
    }
    </>
  )
}

export default RadioChoice