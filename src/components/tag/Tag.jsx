import React, { useContext } from 'react'
import { ContextApi } from '../../helpers/ContextApi'
import './tag.css'
const Tag = ({options,identifier}) => {
  const {select ,setSelect} = useContext(ContextApi)

  const a = (option,e) => {
    
    e.target.parentElement.classList.add(`active`, `active-${option.identifier}`)

    const selectedOption = select.find(el => el.identifier === option.identifier);
    if (selectedOption === undefined) {
      setSelect([...select, {...option, class: `active-${option.identifier}`} ])
    }

  }

  const b = (item,e) => {
    const newarr = select.filter(el => el.identifier !== item.identifier)

    
    setSelect([...newarr])
    
    console.log(e.target.parentElement.id);
 
    e.target.parentElement.classList.remove(`active`)

    
    var elements = document.getElementsByClassName(e.target.parentElement.id)
    
    console.log(elements[0]);
    elements[0]?.classList.remove('active')
   
  }

  

  return (
      <>
      {
        options.map((option)=>(
            <button className= 'tag-button' id={option.class && option.class}>

           {option.name || option.age} <img className='img_correct' src='./images/correct.png' alt="plus"/> <img className='img_close' src='./images/close.png' alt="plus" onClick={(e) => b(option,e)} />  <img className='img_plus' src='./images/plus.png' alt="plus" onClick={(e) => a(option, e)}/>  
            </button>
          ))
      } 
      </>
       
   
    
  )
}

export default Tag