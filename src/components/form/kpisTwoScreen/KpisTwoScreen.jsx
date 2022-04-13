import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContextApi } from '../../../helpers/ContextApi';
import useAuth from '../../../hooks/useAuth';
import Kpi from '../../Kpi/Kpi';
import ModalP from '../../Modal/ModalP';
import Tag from '../../tag/Tag';
import Title from '../../title/Title';

import './kpisTwo.css'

const KpisTwoScreen = ({data}) => {

  const {userInfo} = useAuth()
  const {select,setPage} = useContext(ContextApi)
  const [modalShow, setModalShow] = useState(false);
  const {web,mobile,dataSience,publicRelations} = useAuth()

  let navigate = useNavigate()
  const [subSkills1, setSubSkills1] = useState([])
  const [subSkills2, setSubSkills2] = useState([])
  const [subSkills3, setSubSkills3] = useState([])
  const [subSkills4, setSubSkills4] = useState([])
    

  useEffect(() => {
    setSubSkills1([ {
      options: "web_development",
      subcategory: web && [...web]
    } ])
    setSubSkills2([ {
      options: "mobile_development",
      subcategory: mobile && [...mobile]
    } ])
    setSubSkills3([ {
      options: "data_science",
      subcategory: dataSience && [...dataSience]
    } ])
    setSubSkills4([ {
      options: "public_relations",
      subcategory: publicRelations && [...publicRelations]
    } ])
  }, [web,mobile,dataSience,publicRelations])


  const  toDash=()=>{
    const skills = [ subSkills1[0],subSkills2[0],subSkills3[0],subSkills4[0] ]

    const config = {
      headers: {
    'Content-Type': 'application/json',
    Authorization: ` Bearer ${userInfo.token}`,
      },
  }
     axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-client-information',{skills:skills }, config).then(res => {
    console.log("done");
    navigate('/calender')
       
}).catch(err =>{
    console.err(err.response);
})

  }

  return (
    <>
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
            <div className='active_kpis_Container'>
            
            <Tag  options={select}  />
            <h6 className='see-more'>See More</h6>

          </div>
        </>
       }

          
          <div className='kpisTwo_header'>
            <Title title={data.question_text} diffMargin={select.length === 0 ?  false : true}  />
            { select.length === 0 &&   <span className='kpis_change_skills_btn' onClick={() => setModalShow(true)} >Change skill category</span>}
          </div>
          { data?.skill?.map((option,index)=>(
            <div key={index}>
              <Kpi title={option.name} options={option.subcategory} identifier={option.identifier} />
            </div>

            
            ))}
      </div>
    
      <div>
        <span className='hr'></span>
        <div className='btn_contaienr'>
            <span className='btn_span btn_1' onClick={() => setPage((currPage) => currPage - 1)} >Back</span>
            <span className='btn_span btn_2' onClick={()=> toDash() } >Done</span>
        </div>
    </div>

    </div>
    </>
  )
}

export default KpisTwoScreen