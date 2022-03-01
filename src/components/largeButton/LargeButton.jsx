import React from 'react'
import { useNavigate } from 'react-router-dom'
import './largeButton.css'

const LargeButton = ({text, nav}) => {

  let navigate = useNavigate()
  const oo = () =>{

  navigate(`${nav}`)
  }
  return (
    <div >
        <button className='large_button' onClick={()=> oo()} >
            {text}
        </button>
    </div>
  )
}

export default LargeButton