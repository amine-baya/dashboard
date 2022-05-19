import React from 'react'
import Title from '../../title/Title';
import KpiProfessionalDetails from '../../kpiProfessionalDetails/KpiProfessionalDetails';
import './professionalDetails.css'
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import useClient from '../../../hooks/useClient';

const ProfessionalDetailsScreen = ({data}) => {
  const { setPage} = useClient()

  const { userInfo, long, many, level, need} = useAuth()


  const submitHandler = async (e) => {

    e.preventDefault()
    
    const details = [ long,many,level, need ]

    
    const config = {
          headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${userInfo.token}`,
          },
      }


      await axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-client-information',{professional_details: details }, config).then(res => {
          setPage((currPage) => currPage + 1)
        console.log("done");
           
    }).catch(err =>{
        console.err(err.response);
    })
  }
  
  return (
    <>
    
    <div id='professionald_details' className="container">
    <div className='kpis_Container'>
          <Title title="Professional’s Details" />
        { data?.professional?.map((kpi,index)=>(
          <div key={index}>
            <KpiProfessionalDetails title={kpi.question} options={kpi.options} identifier={kpi.identifier}  /> 
          </div>  

          ))}
    </div>

    <div>
        <span className='hr'></span>
        <div className='btn_contaienr'>
            <span className='btn_span btn_1' onClick={() =>setPage((currPage) => currPage - 1)}   >Back</span>
            <span className='btn_span btn_2' onClick={(e) => submitHandler(e)}>Next: Skills</span>
        </div>
    </div>

  </div>
    </>
  )
}

export default ProfessionalDetailsScreen