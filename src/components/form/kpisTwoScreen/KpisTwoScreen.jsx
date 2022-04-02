import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContextApi } from '../../../helpers/ContextApi';
import Button from '../../button/Button';
import Kpi from '../../Kpi/Kpi';
import ModalP from '../../Modal/ModalP';
import Tag from '../../tag/Tag';
import Title from '../../title/Title';

import './kpisTwo.css'

const KpisTwoScreen = ({data}) => {


  const {select,setPage} = useContext(ContextApi)
  const [modalShow, setModalShow] = useState(false);
  let navigate = useNavigate()

  const  toDash=()=>{
    navigate('/calender')
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
          { data?.skill?.map((option)=>(

              <Kpi title={option.name} options={option.subcategory} identifier={option.identifier} />
              

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