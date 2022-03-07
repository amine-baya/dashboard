import React from 'react'
import Button  from '../../components/button/Button'
import KpiProfessionalDetails from '../../components/kpiProfessionalDetails/KpiProfessionalDetails'
import Title from '../../components/title/Title'
import './professionalDetails.css'

const ProfessionalDetailsScreen = ({page, setPage,data}) => {
  console.log(data);
  return (
    <>
    
    <div id='professionald_details' className="container">
    <div className='kpis_Container'>
          <Title title="Professional’s Details" />
        { data.map((kpi)=>(
          <KpiProfessionalDetails title={kpi.question} options={kpi.options}  />

          ))}
    </div>
  
          
    <Button text="Next: Skills" nav="/kpis-two" page={page} setPage={setPage}  />

  </div>
    </>
  )
}

export default ProfessionalDetailsScreen