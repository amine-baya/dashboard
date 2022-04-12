import React, { useContext, useState } from 'react'
import { ContextApi } from '../../helpers/ContextApi'
import './type.css'

const Type = ({text,name,value}) => {

  const {type,setType} = useContext(ContextApi)
  

  const change = (e) => {
    setType(e.target.value)
    
    }


  return (
    <div className={( type === value) ? 'type checked' : 'type'}>
        <input onChange={(e) => change(e) } type="radio" name="role" value={value}  />
        <p className={( type === value) && 'checked'}>{text}</p>
    </div>
  )
}

export default Type