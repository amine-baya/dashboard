import React from 'react'
import Button from '../../components/button/Button'
import Kpi from '../../components/Kpi/Kpi'
import Title from '../../components/title/Title'
import Tag from '../../components/tag/Tag'
import {kpisSkills} from '../../kpisInfo.js'
import './kpisTwo.css'

const KpisTwoScreen = () => {

    
    const select = ["one","two","three"]
  return (
    <div id='kpisTwo' className="container">
      <div className='kpis_Container'>

        { select.length > 0 &&  
        <>
         <div className='kpisTwo_header'>
            <Title title="Selected tags" />
            <span className='kpis_change_skills_btn'>Change skill category</span>
          </div>

            <Tag  options={select}  />
        </>
       }

          
          <div className='kpisTwo_header'>
            <Title title="Skills" />
            <span className='kpis_change_skills_btn'>Change skill category</span>
          </div>
          { kpisSkills.map((kpi)=>(
            <Kpi title={kpi.title} options={kpi.options}  />

            ))}
      </div>
    
      <Button text="Next: Project Details" />

    </div>
  )
}

export default KpisTwoScreen