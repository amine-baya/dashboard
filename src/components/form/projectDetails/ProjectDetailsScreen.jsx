import React from 'react'
import Button from '../../button/Button'
import Type from '../../projectDetailsTypes/Type'
import Title from '../../title/Title'

import './projectDetails.css'


const ProjectDetailsScreen = ({ page, setPage,data }) => {
  return (
    <>
    <div id='project_details' className='container' >
      <div className='project_details_container'>
          <Title title="Project Details" />
          <p className='project_details_question'>{data.question_text}</p>
          <div className='project_details_types'>
            {
              data.options.map((option)=>(
                <Type text={option.name} name="role" value={option.identifier} />
              ))
            }
           
          </div>
      </div>
          <Button text="Next: Project Details" nav="/professional-details"   />
    </div>
    </>
  )
}

export default ProjectDetailsScreen