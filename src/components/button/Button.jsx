import React, { useContext } from 'react'
import { ContextApi } from '../../helpers/ContextApi'

import './Button.css'

const Button = ({text}) => {
 const {setPage} = useContext(ContextApi)

  
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