import React, { useContext } from 'react'
import { ContextApi } from '../../helpers/ContextApi'
import './radioChoice.css'

const RadioChoice = (props) => {

  const {details,setDetails} = useContext(ContextApi)
  const handleRadiobox = e =>{
     const selectedRole = details.find(el => el === e.target.value)
     if (selectedRole === undefined) {
      setDetails([...details,e.target.value]);
     }
     else{
     const newRoles = details.filter(el => el !== selectedRole);
     setDetails(newRoles);
     }
   }
  return (
      
    <>
    {
      props.options.map((option)=>(
        <div className='radio_details'>
            <input onChange={handleRadiobox}  type="radio" name={props.identifier} value={option.identifier} />
            <p>{option.name}</p>
        </div>
        ))
    }
    </>
  )
}

export default RadioChoice