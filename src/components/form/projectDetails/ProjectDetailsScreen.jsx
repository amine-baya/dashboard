import React, { useContext } from 'react'
import { ContextApi } from '../../../helpers/ContextApi'

import Type from '../../projectDetailsTypes/Type'
import Title from '../../title/Title'
import './projectDetails.css'
import axios from 'axios'
import useAuth from '../../../hooks/useAuth'

const ProjectDetailsScreen = ({data}) => {
  const {type, setPage} = useContext(ContextApi)
  const {userInfo} = useAuth()


  const submitHandler = async (e) => {

    e.preventDefault()
  
      setPage((currPage) => currPage + 1)

      const config = {
          headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${userInfo.token}`,
          },
      }
        await axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-client-information',{project_type: type }, config).then(res => {
        console.log("done");
           
    }).catch(err =>{
        console.err(err.response);
    })
  }
  return (
    <>
    <div id='project_details' className='container' >
      <div className='project_details_container'>
          <Title title="Project Details" />
          <p className='project_details_question'>{data?.type[0].question}</p>
          <div className='project_details_types'>
            {
              data?.type[0]?.options.map((option,index)=>(
                <div key={index}>
                  <Type text={option.name} value={option.identifier} />
                </div>
              ))
            }
           
          </div>
      </div>
      <div>
        <span className='hr'></span>
        <div className='btn_contaienr'>
            <span className='btn_span btn_1' onClick={() =>setPage((currPage) => currPage - 1)}   >Back</span>
            <span className='btn_span btn_2' onClick={(e) => submitHandler(e)}>Next: Project Details</span>
        </div>
    </div>
    </div>
    </>
  )
}

export default ProjectDetailsScreen