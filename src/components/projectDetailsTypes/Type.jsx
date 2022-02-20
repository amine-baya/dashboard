import React, { useState } from 'react'
import './type.css'

const Type = ({text}) => {
  const [checked, setchecked] = useState(false)
  return (
    <div className={checked ? 'type checked' : 'type'}>
        <input type="checkbox" onChange={() => setchecked(!checked)}/>
        <p className={checked && 'checked'}>{text}</p>
    </div>
  )
}

export default Type