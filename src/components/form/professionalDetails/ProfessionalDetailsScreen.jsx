import React from 'react'
import Button from '../../button/Button';
import Title from '../../title/Title';
import KpiProfessionalDetails from '../../kpiProfessionalDetails/KpiProfessionalDetails';


import './professionalDetails.css'

const ProfessionalDetailsScreen = ({data}) => {
  return (
    <>
    
    <div id='professionald_details' className="container">
    <div className='kpis_Container'>
          <Title title="Professional’s Details" />
        { data.map((kpi)=>(  
          <KpiProfessionalDetails title={kpi.question} options={kpi.options} identifier={kpi.identifier}  />

          ))}
    </div>
  
          
    <Button text="Next: Skills" nav="/kpis-two"   />

  </div>
    </>
  )
}

export default ProfessionalDetailsScreen