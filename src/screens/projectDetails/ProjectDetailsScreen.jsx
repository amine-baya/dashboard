import React from 'react'
import Title from '../../components/title/Title'
import Button from '../../components/button/Button'
import Type from '../../components/projectDetailsTypes/Type'
import './projectDetails.css'

const ProjectDetailsScreen = () => {
  return (
    <div id='project_details' >
      <div className='project_details_container'>
          <Title title="Project Details" />
          <p className='project_details_question'>What type of project are you hiring for</p>
          <div className='project_details_types'>
            <Type text="New bussiness never started"/>
            <Type text="Existing bussiness that is expanding"/>
            <Type text="Ongoiing adivse and mentorship"/>
            <Type text="None of the above, I am interested to learn about kimbocorp"/>
          </div>
      </div>
          <Button text="Next: Project Details" />
    </div>
  )
}

export default ProjectDetailsScreen