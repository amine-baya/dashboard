import React, { useContext } from 'react'
import { ContextApi } from '../../../helpers/ContextApi'

import Role from '../../homeScreenRoles/Role'
import './HomeScreen.css'

const HomeScreen = ({data}) => {

  const {setPage} = useContext(ContextApi)
  
  const getStarted =()=>{
    data &&  setPage((currPage) => currPage + 1)
  }
  console.log(data);
  return (
    <>
    <div className='homeScreen'>
      <div className='home_trusted'>
          <h2>Trusted by</h2>
          <div className='home_trusted_logo'>
              <img src="../../images/bechuzi.png" alt="bechuzi" />
              <img src="../../images/egn_logo.png" alt="egn" /> 
              <img src="../../images/usc_logo.png" alt="usc_logo" />
              <img src="../../images/csr_logo.png" alt="csr_logo" />
              <img src="../../images/motorola-logo.png" alt="motorola" />
          </div>
      </div>

      <div className='home_role'>
           <h3>{data?.question_text}</h3>
          <div className='home_roles'> 
         { data?.options.map((option) => (
           <Role text={option.name} name="role" value={option.identifier}  />
         )
          )}
          </div> 
          <span className='homeScreen_role_span'>Looking to work with companies?</span>
          <span className='homeScreen_hr'></span>
          <span className='homeScreen_btn' onClick={getStarted}>Get Started</span>
      </div>
    </div>
    </>
  )
}

export default HomeScreen