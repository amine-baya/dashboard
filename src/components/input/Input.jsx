import React from 'react'
import './input.css'

const Input = ({label, placeH, type}) => {
  
  return (
    <div className='input_component'>
        <label className='label'>{label}</label>
        <input type={type ? type : 'text'} placeholder={placeH && placeH} />
    </div>
  )
}

export default Input