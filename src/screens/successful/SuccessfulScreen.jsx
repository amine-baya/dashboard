import React from 'react'
import LargeButton from '../../components/largeButton/LargeButton'
import './successful.css'

const SuccessfulScreen = () => {
  return (
    <div className='container'>
      <div id='successful'>
        <img src="../../images/success.png" alt="success" />
        <h3>Submission successful!</h3>
        <p>Thanks! We have received your submission. Our Consultant will contant you in a while</p>
        <LargeButton text="Continue" />
      </div>


    </div>
  )
}

export default SuccessfulScreen