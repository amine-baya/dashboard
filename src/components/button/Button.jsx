import React from 'react'
import './Button.css'

const Button = ({text}) => {
  return (
    <div>
        <span className='hr'></span>
        <div className='btn_contaienr'>
            <span className='btn_span btn_1'>Back</span>
            <span className='btn_span btn_2'>{text}</span>
        </div>
    </div>
  )
}

export default Button