import React from 'react'
import './type.css'

const Type = ({text}) => {
  return (
    <div className='type'>
        <input type="checkbox" />
        <p>{text}</p>
    </div>
  )
}

export default Type