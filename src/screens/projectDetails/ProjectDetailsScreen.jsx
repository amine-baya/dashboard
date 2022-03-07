import React from 'react'
import Title from '../../components/title/Title'
import Button from '../../components/button/Button'
import Type from '../../components/projectDetailsTypes/Type'
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
                <Type text={option.name} />
              ))
            }
           
          </div>
      </div>
          <Button text="Next: Project Details" nav="/professional-details" page={page} setPage={setPage}    />
    </div>
    </>
  )
}

export default ProjectDetailsScreen