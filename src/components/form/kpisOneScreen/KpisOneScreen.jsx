import axios from 'axios'
import React from 'react'
import useAuth from '../../../hooks/useAuth'
import useClient from '../../../hooks/useClient'
import Kpi3 from '../../kpi3/Kpi3'
import Title from '../../title/Title'
import './kpisOne.css'

const KpisOneScreen = ({ data }) => {

  const {userInfo, kips} = useAuth()
  const {setPage} = useClient()


  const submitHandler = async (e) => {

    e.preventDefault()

      setPage((currPage) => currPage + 1)

      
      const config = {
          headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${userInfo.token}`,
          },
      }
        await axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-client-information',{kips }, config).then(res => {
        console.log("done");
           
    }).catch(err =>{
        console.err(err.response);
    })
  }


  return (
    <>
    <div id='kpisOne' className="container">
      <div className='kpis_Container'>
            <Title title="Please select KPIs that you want this person to fulfill:" />
          { data?.options.map((option,index)=>(
            <div key={index}>
              <Kpi3 title={option.name} options={option.subkpis} data={data} />
            </div>

            ))}
      </div>
    
      <div>
        <span className='hr'></span>
        <div className='btn_contaienr'>
            <span className='btn_span btn_1'  onClick={() =>setPage((currPage) => currPage - 1)}  >Back</span>
            <span className='btn_span btn_2' onClick={(e) => submitHandler(e)}>Next: Project Details</span>
        </div>
    </div>

    </div> 
    </>
  )
}

export default KpisOneScreen