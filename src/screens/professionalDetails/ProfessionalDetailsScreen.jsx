import React from 'react'
import Button  from '../../components/button/Button'
import Header from '../../components/header/Header'
import KpiProfessionalDetails from '../../components/kpiProfessionalDetails/KpiProfessionalDetails'
import Title from '../../components/title/Title'
import {professionalDetails} from '../../kpisInfo.js'
import './professionalDetails.css'

const ProfessionalDetailsScreen = () => {
  return (
    <>
    <Header /> 
    <div id='professionald_details' className="container">
    <div className='kpis_Container'>
          <Title title="Professional’s Details" />
        { professionalDetails.map((kpi)=>(
          <KpiProfessionalDetails title={kpi.title} options={kpi.options}  />

          ))}
    </div>
  
    <Button text="Next: Skills" nav="/kpis-two" />

  </div>
    </>
  )
}

export default ProfessionalDetailsScreen