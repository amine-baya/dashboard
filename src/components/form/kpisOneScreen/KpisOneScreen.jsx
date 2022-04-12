import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {  ContextApi, UserInfo } from '../../../helpers/ContextApi'
import Kpi3 from '../../kpi3/Kpi3'
import Title from '../../title/Title'
import './kpisOne.css'

const KpisOneScreen = ({ data }) => {

  const {userInfo,sales,marketing,finance,development} = useContext(UserInfo)
  const {setPage} = useContext(ContextApi)

    const [subkpis1, setSubkpis1] = useState([])
    const [subkpis2, setSubkpis2] = useState([])
    const [subkpis3, setSubkpis3] = useState([])
    const [subkpis4, setSubkpis4] = useState([])

  useEffect(() => {
    setSubkpis1([ {
      options: "sales",
      subcategory: sales && [...sales]
    } ])
    setSubkpis2([ {
      options: "marketing",
      subcategory: marketing && [...marketing]
    } ])
    setSubkpis3([ {
      options: "finance",
      subcategory: finance && [...finance]
    } ])
    setSubkpis4([ {
      options: "development",
      subcategory: development && [...development]
    } ])
  }, [sales,marketing,finance,development])

  const submitHandler = async (e) => {

    e.preventDefault()

      const kips = [ subkpis1[0],subkpis2[0],subkpis3[0],subkpis4[0] ]

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
              <Kpi3 title={option.name} options={option.subkpis}  />
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