import React from 'react'
import Button from '../../button/Button'

import Kpi2 from '../../kpi2/Kpi2'
import Title from '../../title/Title'
import './kpisOne.css'

const KpisOneScreen = ({ data }) => {
  console.log(data);
  return (
    <>
    <div id='kpisOne' className="container">
      <div className='kpis_Container'>
            <Title title={data.question_text} />
          { data?.options.map((option)=>(
            <Kpi2 title={option.name} options={option.subcategory}  />

            ))}
      </div>
    
      <Button text="Next: Project Details" nav="/project-details"  />

    </div> 
    </>
  )
}

export default KpisOneScreen