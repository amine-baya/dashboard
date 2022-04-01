import React,{useContext} from 'react'
import { ContextApi } from '../../helpers/ContextApi'
import './Role.css'

const Role = ({text,name,value}) => {

 const {roles,setRoles} = useContext(ContextApi)
 const handleCheckbox = e =>{
    const selectedRole = roles.find(el => el === e.target.value)
    if (selectedRole === undefined) {
      setRoles([...roles,e.target.value]);
    }
    else{
    const newRoles = roles.filter(el => el !== selectedRole);
    setRoles(newRoles);
    }
  }
  
  return (
    <div className='role' >
          <input onChange={handleCheckbox} type="checkbox" name={name} value={value}  />
          <p>{text}</p>
    </div>
  )
}

export default Role