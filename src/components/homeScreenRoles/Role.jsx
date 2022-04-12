import React,{useContext} from 'react'
import { ContextApi } from '../../helpers/ContextApi'
import './Role.css'

const Role = ({text,name,value}) => {

 const {setRoles} = useContext(ContextApi)
 const handleCheckbox = e =>{
  setRoles(e.target.value)
  }
  
  return (
    <div className='role' >
          <input onChange={handleCheckbox} type="radio" name="role" value={value}  />
          <p>{text}</p>
    </div>
  )
}

export default Role