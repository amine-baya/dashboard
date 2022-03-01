import React, { useState } from 'react'
import Button from '../../components/button/Button'
import Kpi from '../../components/Kpi/Kpi'
import Title from '../../components/title/Title'
import Tag from '../../components/tag/Tag'
import ModalP from '../../components/Modal/ModalP'
import {kpisSkills} from '../../kpisInfo.js'
import './kpisTwo.css'
import Header from '../../components/header/Header'

const KpisTwoScreen = () => {

    const [modalShow, setModalShow] = useState(false);
    const select = ["one","two","three"]
  return (
    <>
    <Header /> 
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
            <h6 className='see-more'>See More</h6>
        </>
       }

          
          <div className='kpisTwo_header'>
            <Title title="Skills" diffMargin={select.length === 0 ?  false : true}  />
            { select.length === 0 &&   <span className='kpis_change_skills_btn' onClick={() => setModalShow(true)} >Change skill category</span>}
          </div>
          { kpisSkills.map((kpi)=>(
            <Kpi title={kpi.title} options={kpi.options}  />

            ))}
      </div>
    
      <Button text="Next: Project Details" nav='/professional-need'/>

    </div>
    </>
  )
}

export default KpisTwoScreen