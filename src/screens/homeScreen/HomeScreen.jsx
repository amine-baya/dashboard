import React from 'react'
import './HomeScreen.css'
import Role from '../../components/homeScreenRoles/Role'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <div className='home_trusted'>
          <h2>Trusted by</h2>
          <div className='home_trusted_logo'>
              <img src="images/bechuzi.png" alt="bechuzi" />
              <img src="images/egn_logo.png" alt="egn" />
              <img src="images/usc_logo.png" alt="usc_logo" />
              <img src="images/csr_logo.png" alt="csr_logo" />
              <img src="images/motorola-logo.png" alt="motorola" />
          </div>
      </div>

      <div className='home_role'>
          <h3>What role would you like to have the professional fill?</h3>
          <div className='home_roles'>
          <Role text="Sales-Bussiness development Manager, Sales Director, Sales Executive"/>
          <Role text="Sales-Bussiness development Manager, Sales Director, Sales Executive"/>
          <Role text="Sales-Bussiness development Manager, Sales Director, Sales Executive"/>
          <Role text="Sales-Bussiness development Manager, Sales Director, Sales Executive"/>
          <Role text="other"/>
          </div>
          <span className='homeScreen_role_span'>Looking to work with companies?</span>
          <span className='homeScreen_hr'></span>
          <span className='homeScreen_btn'>Get Started</span>
      </div>
    </div>
  )
}

export default HomeScreen