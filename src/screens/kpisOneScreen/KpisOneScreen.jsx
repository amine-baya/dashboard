import React from 'react'
import Button  from '../../components/button/Button'
import Kpi from '../../components/Kpi/Kpi'
import Title from '../../components/title/Title'
import KpisInfo from '../../kpisInfo.js'
import './kpisOne.css'

const KpisOneScreen = () => {
  return (
    <div className="kpis-Container">
    <Title title="Please select KPIs that you want this person to fulfill:" />
     { KpisInfo.map((kpi)=>(
      <Kpi title={kpi.title} options={kpi.options}  />

      ))}
      <Button />

    </div> 
  )
}

export default KpisOneScreen