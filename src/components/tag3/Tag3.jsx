import React from 'react'
import useAuth from '../../hooks/useAuth'
import './tag3.css'
const Tag3 = ({options}) => {


const {kips} = useAuth()
const addIndustries = (option, e) =>
{
  kips.map(element => {
    if(option.parent === element.identifier ){
      e.target.parentElement.nodeName === "BUTTON" && e.target.parentElement.classList.toggle(`active`)
      e.target.classList.toggle(`active`)
      const selectedOption = element.subcategory.find(el => el === option.name)
      
     if (selectedOption) {
      element.subcategory = element.subcategory.filter(el => el !== option.name)
       }

     if (selectedOption === undefined) {
      element.subcategory = [...element.subcategory, option.name]
       
      }   
    }
  })  
}
            
  return (
      <>
      {
        options?.map((option)=>( 
            <button key={option.identifier} className= 'tag-button' onClick={(e) => addIndustries(option, e)}>
                {option.name } <img className='img_correct' src='./images/correct.png' alt="plus"/>  <img className='img_plus' src='./images/plus.png' alt="plus" />   
            </button>
          )) 
      } 
      </>
       
   
    
  )
}

export default Tag3