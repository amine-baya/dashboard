import React from 'react'
import './Role.css'

const Role = ({text}) => {
  return (
    <div className='role'>
          <input type="checkbox" />
          <p>{text}</p>
    </div>
  )
}

export default Role