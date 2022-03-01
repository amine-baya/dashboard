import React from 'react'
import Button  from '../../components/button/Button'
import Header from '../../components/header/Header'
import Kpi from '../../components/Kpi/Kpi'
import Title from '../../components/title/Title'
import {KpisInfo} from '../../kpisInfo.js'
import './kpisOne.css'

const KpisOneScreen = () => {
  return (
    <>
    <Header /> 
    <div id='kpisOne' className="container">
      <div className='kpis_Container'>
            <Title title="Please select KPIs that you want this person to fulfill:" />
          { KpisInfo.map((kpi)=>(
            <Kpi title={kpi.title} options={kpi.options}  />

            ))}
      </div>
    
      <Button text="Next: Project Details" nav="/project-details" />

    </div> 
    </>
  )
}

export default KpisOneScreen