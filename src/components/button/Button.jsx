import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.css'

const Button = ({text,nav,page,setPage}) => {
  let navigate = useNavigate()

  const move =()=>{
    navigate(`${nav}`)
  }
  return (
    <div>
        <span className='hr'></span>
        <div className='btn_contaienr'>
            <span className='btn_span btn_1' onClick={() => setPage((currPage) => currPage - 1)} >Back</span>
            <span className='btn_span btn_2' onClick={()=> setPage((currPage) => currPage + 1) } >{text}</span>
        </div>
    </div>
  )
}

export default Button