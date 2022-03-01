import React from 'react'
import './ProfessionalNeed.css'
import Title from '../../components/title/Title'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'

const ProfessionalNeedScreen = () => {
  return (
      <>
      <Header /> 
    <div className='container' id='professional_need'>
        <div className='professional_need_container'>
            <Title title='Shortlisting candidates based on your requirement'/>
            <img className='professional_need_img' src="images/condidate.png" alt="condidate" />
            <div className='professional_need_choice'>
                <h5>Are you open to have this candidate work remotely?</h5>
                <input type='radio' /> <span>yes</span>
                <input type='radio' /> <span>no</span>
            </div>
            <div>
                <h5>How would you like to hire this candidate?</h5>
                <div className='professional_need_grid'>
                    <div className='professional_need_grid_box professional_need_grid_box_contractor'>
                        <h3>Hire as a Contractor</h3>
                        <div><img src="../../images/check.png" alt="check" /><span>Still regarded as a full-time employee</span></div>
                        <div><img src="../../images/check.png" alt="check" /><span>Invoiced Monthly</span></div>
                        <div><img src="../../images/check.png" alt="check" /><span>Additional wage credits available</span></div>
                        <div><img src="../../images/check.png" alt="check" /><span>Benefit and allownace seperate</span></div>

                    </div>
                    <div className='professional_need_grid_box'>
                        <h3>Hire as an Employee</h3>
                        <div><img src="../../images/check.png" alt="check" /><span>Still regarded as a full-time employee</span></div>
                        <div><img src="../../images/check.png" alt="check" /><span>Invoiced Monthly</span></div>
                        <div><img src="../../images/check.png" alt="check" /><span>Additional wage credits available</span></div>
                        <div><img src="../../images/check.png" alt="check" /><span>Benefit and allownace seperate</span></div>

                    </div>
                </div>
            </div>
        </div>
        <Button text='Next: Schedule' nav='/schedule'/>
    </div>
      </>
  )
}

export default ProfessionalNeedScreen