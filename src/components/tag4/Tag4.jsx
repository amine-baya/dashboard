import React  from 'react'
import useAuth from '../../hooks/useAuth'
import './tag4.css'
const Tag2 = ({options,identifier}) => {

  const {select2 ,setSelect2} = useAuth()

  const addIndustries = (option,e) => {

    e.target.parentElement.nodeName === "BUTTON" && e.target.parentElement.classList.toggle(`active`)
    e.target.classList.toggle(`active`)
    const selectedOption = select2?.find(el => el === option.identifier);
     if (selectedOption) {
    setSelect2(select2.filter(el => el !== option.identifier))
     }
     if (selectedOption === undefined) {
        setSelect2([...select2, option.identifier ])
     }
    }
  return (
      <>
      {
        options?.map((option)=>(
            <button  key={option.identifier} className= {select2.includes(option.identifier) ? 'tag-button active' : 'tag-button' }  onClick={(e) => addIndustries(option, e)}>
                {option.name || option.age} <img className='img_correct' src='./images/correct.png' alt="plus"/>  <img className='img_plus' src='./images/plus.png' alt="plus" />   
            </button>
          )) 
      } 
      </>
       
   
    
  )
}

export default Tag2