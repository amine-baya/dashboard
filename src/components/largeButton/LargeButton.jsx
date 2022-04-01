import React from 'react'

import './largeButton.css'

const LargeButton = ({text}) => {

 

  return (
    <div >
        <button className='large_button'  >
            {text}
        </button>
    </div>
  )
}

export default LargeButton