import React, { useState } from 'react'
import Button from '../../components/button/Button'
import Kpi from '../../components/Kpi/Kpi'
import Title from '../../components/title/Title'
import Tag from '../../components/tag/Tag'
import ModalP from '../../components/Modal/ModalP'
import {kpisSkills} from '../../kpisInfo.js'
import './kpisTwo.css'

const KpisTwoScreen = () => {

    const [modalShow, setModalShow] = useState(false);
    const select = ["one","two","three"]
  return (
    <div id='kpisTwo' className="container">
      <div className='kpis_Container'>

        { select.length > 0 &&  
        <>
         <div className='kpisTwo_header'>
            <Title title="Selected tags" />
            <span className='kpis_change_skills_btn' onClick={() => setModalShow(true)} >Change skill category</span>
          </div>
          <ModalP
            show={modalShow}
            onHide={() => setModalShow(false)}
            />

            <Tag  options={select}  />
        </>
       }

          
          <div className='kpisTwo_header'>
            <Title title="Skills" />
            <span className='kpis_change_skills_btn' onClick={() => setModalShow(true)} >Change skill category</span>
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