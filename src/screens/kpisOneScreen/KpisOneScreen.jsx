import React from 'react'
import Button  from '../../components/button/Button'
import Kpi from '../../components/Kpi/Kpi'
import Title from '../../components/title/Title'
import './kpisOne.css'

const KpisOneScreen = ({ page, setPage,data }) => {
  return (
    <>
    <div id='kpisOne' className="container">
      <div className='kpis_Container'>
            <Title title={data.question_text} />
          { data.options.map((option)=>(
            <Kpi title={option.name} options={option.subcategory}  />

            ))}
      </div>
    
      <Button text="Next: Project Details" nav="/project-details" page={page} setPage={setPage} />

    </div> 
    </>
  )
}

export default KpisOneScreen