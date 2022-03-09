import React from 'react'
import Button from '../../button/Button'



import Kpi from '../../Kpi/Kpi'
import Title from '../../title/Title'
import './kpisOne.css'

const KpisOneScreen = ({ data }) => {
  return (
    <>
    <div id='kpisOne' className="container">
      <div className='kpis_Container'>
            <Title title={data.question_text} />
          { data?.options.map((option)=>(
            <Kpi title={option.name} options={option.subcategory}  />

            ))}
      </div>
    
      <Button text="Next: Project Details" nav="/project-details"  />

    </div> 
    </>
  )
}

export default KpisOneScreen