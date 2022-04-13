import React from 'react'

import useAuth from '../../hooks/useAuth'
import './tag5.css'
const Tag5 = ({options,identifier}) => {

  const {select3 ,setSelect3} = useAuth()

  const addIndustries = (option,e) => {

    e.target.parentElement.nodeName === "BUTTON" && e.target.parentElement.classList.toggle(`active`)
    
    e.target.classList.toggle(`active`)
    

    const selectedOption = select3?.find(el => el.identifier === option.identifier);
     if (selectedOption) {
    
      setSelect3(select3.filter(el => el.identifier !== option.identifier))
     }
     if (selectedOption === undefined) {
      setSelect3([...select3, option.identifier ])
     }
    }
    
  return (
      <>
      {
        options?.map((option)=>(
            <button key={option.identifier} className= {select3.includes(option.identifier) ? 'tag-button active' : 'tag-button' }  onClick={(e) => addIndustries(option, e)}>
                {option.name || option.age} <img className='img_correct' src='./images/correct.png' alt="plus"/>  <img className='img_plus' src='./images/plus.png' alt="plus" />   
            </button>
          )) 
      } 
      </>
       
   
    
  )
}

export default Tag5