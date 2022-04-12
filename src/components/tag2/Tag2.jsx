import React, { useContext, useState }  from 'react'
import { UserInfo } from '../../helpers/ContextApi'
import './tag2.css'
const Tag2 = ({options,identifier}) => {

  const {select1 ,setSelect1} = useContext(UserInfo)
  

  const addIndustries = (option,e) => {

    e.target.parentElement.nodeName === "BUTTON" && e.target.parentElement.classList.toggle(`active`)
    
    e.target.classList.toggle(`active`)
    

    const selectedOption = select1?.find(el => el === option.identifier);
     if (selectedOption) {
  
    setSelect1(select1.filter(el => el !== option.identifier))
     }
     if (selectedOption === undefined) {
      setSelect1([...select1,option.identifier ])
     }
    }
    

  return (
      <>
      {
        options?.map((option)=>(
            <button key={option.identifier} className= {select1.includes(option.identifier) ? 'tag-button active' : 'tag-button' } onClick={(e) => addIndustries(option, e)}>
                {option.name || option.age} <img className='img_correct' src='./images/correct.png' alt="plus"/>  <img className='img_plus' src='./images/plus.png' alt="plus" />   
            </button>
          )) 
      } 
      </>
       
   
    
  )
}

export default Tag2