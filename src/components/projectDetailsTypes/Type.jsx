import React, { useContext, useState } from 'react'
import { ContextApi } from '../../helpers/ContextApi'
import './type.css'

const Type = ({text,name,value}) => {
  const [checked, setchecked] = useState(false)
  const {types,setTypes} = useContext(ContextApi)

  const handleCheckbox = e =>{
    setchecked(!checked)
     const selectedType = types.find(el => el === e.target.value);
     console.log(selectedType);
     if (selectedType === undefined) {
      setTypes([...types,e.target.value]);
     }
     else{
     const newTypes = types.filter(el => el !== selectedType);
     setTypes(newTypes);
     }
   }
  return (
    <div className={checked ? 'type checked' : 'type'}>
        <input onChange={handleCheckbox} type="checkbox"  name={name} value={value}  />
        <p className={checked && 'checked'}>{text}</p>
    </div>
  )
}

export default Type