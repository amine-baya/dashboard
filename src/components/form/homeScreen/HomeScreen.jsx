import axios from 'axios'
import React, { useContext } from 'react'
import { ContextApi, UserInfo } from '../../../helpers/ContextApi'
import Role from '../../homeScreenRoles/Role'
import './HomeScreen.css'

const HomeScreen = ({data}) => {

  const {setPage,roles} = useContext(ContextApi)
  const {userInfo} = useContext(UserInfo)

  const getStarted =()=>{
    data &&  setPage((currPage) => currPage + 1)


      const config = {
          headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${userInfo?.token}`,
          },
      }
         axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-client-information',{selected_role: roles }, config).then(res => {
        console.log("done");
           
    }).catch(err =>{
        console.err(err.response);
    })

        
  }
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
           <h3>{data?.role[0]?.question_text}</h3>
          <div className='home_roles'> 
         { data?.role[0]?.options?.map((option,index) => (
           <div key={index}>
             <Role text={option?.name} name="role" value={option?.identifier}  />
            </div>
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