import React from 'react'
import './textArea.css'

const TextArea = ({label,placeH}) => {
  return (
      <>
        <label>{label}</label>
        <textarea id="text-area" name="story" placeholder={placeH} >  
        </textarea> 
      </>
  )
}

export default TextArea