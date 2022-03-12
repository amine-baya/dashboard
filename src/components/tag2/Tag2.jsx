import React  from 'react'
import './tag2.css'
const Tag2 = ({options,identifier}) => {


  return (
      <>
      {
        options.map((option)=>(
            <button className= 'tag-button'>
           {option.name}  <img className='img_plus' src='./images/plus.png' alt="plus"/>  
            </button>
          ))
      } 
      </>
       
   
    
  )
}

export default Tag2