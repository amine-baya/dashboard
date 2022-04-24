import React from 'react'
import useTalent from '../../hooks/useTalent'

import './talentButton.css'

const TalentButton = ({text}) => {
 const {setTalentPage} = useTalent()

  
  return (
    <div>
        <span className='hr'></span>
        <div className='btn_contaienr'>
            <span className='btn_span btn_1' onClick={() => setTalentPage((currPage) => currPage - 1)} >Back</span>
            <span className='btn_span btn_2' onClick={()=> setTalentPage((currPage) => currPage + 1) } >{text}</span>
        </div>
    </div>
  )
}

export default TalentButton