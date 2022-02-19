import React from 'react'
import plus from '../../images/Vector.png'
import './tag.css'
const Tag = (props) => {
    console.log(props.options)
  return (
      <>
      {
        props.options.map((option)=>(
            <button className='tag-button' >
           {option} <img src={plus} alt="plus" />
            </button>
          ))
      }
      </>
       
   
    
  )
}

export default Tag