import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../header/Header'
import './confirmation.css'


const Confirmation = () => {
  let navigate = useNavigate()

  return (
    <>
      
    <div className='container'>
      <div id='successful'>
            <img src="../../images/success.png" alt="success" />
            <h3>Completed!</h3>
            <p>You have completed your information.</p>
            <div >
                <button className='large_button' onClick={()=>{navigate('/resume')}}   >
                  <span >Publish Profile</span>
                </button>
            </div>
      </div>


    </div>
    </>
  )
}

export default Confirmation