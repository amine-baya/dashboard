import React from 'react'
import './tag.css'
const Tag = (props) => {
  return (
      <>
      {
        props.options.map((option)=>(
            <button className='tag-button' >
           {option} <img src='../../images/plus.png' alt="plus" />
            </button>
          ))
      }
      </>
       
   
    
  )
}

export default Tag