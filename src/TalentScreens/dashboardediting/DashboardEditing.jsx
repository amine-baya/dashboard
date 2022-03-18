import React from 'react'
import './DashboardEditing.css'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import DashboardNavbar from '../../components/dashboardNavbar/DashboardNavbar'
import Title from '../../components/title/Title'

const DashboardEditing = () => {
  return (
         <>
      <DashboardNavbar />
      <DashboardHeader />
    <div className='container_dashboard_right'>
        <div></div>
        <div id='dashboard_editing'>
            <div className='dashboard_editing_titles'>
                <Title title="Edit Profile" />
                <div className='dashboard_editing_cv_button'> CV Preview</div>
            </div>
            <div className='dashboard_editing_header'>
                <div className='dashboard_editing_header_info' >
                    <div className='dashboard_editing_header_img' >
                        <img src="../../images/preview-img.png" alt="sorry" />
                    </div>
                    <h4>Austin Robertson <span>-Graphic designer</span></h4>
                </div>
                <div className='dashboard_editing_header_button' >        
                        <span>
                            Change Picture
                        </span>
                </div>
            </div>

            <div className='dashboard_editing_body'>
                <div className='dashboard_editing_body_about' >
                    <div className='dashboard_editing_body_about_header'>
                        <h4>About</h4>
                        <img src="../../images/pen-edit.png" alt="edit" /> 
                    </div>
                    <p className='dashboard_editing_body_about_p'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet
                    </p>
                    <p> Available Nominee:  <span>Tonny monny</span></p>
                    <p> Email: <span> nikjone@demoo.com </span></p>
                    <p> Phone: <span>001235125612</span></p>
                    <p> Location: <span>USA</span></p>


                </div>
                <div className='dashboard_editing_body_portfolio' >
                    <div className='dashboard_editing_body_portfolio_header'>
                        <h4>Portfolio</h4>
                         <span>Add New</span>
                    </div>
                    <div className='dashboard_editing_body_portfolio_project'>
                        <div className='dashboard_editing_body_portfolio_project_img'>
                            <img src="../../images/preview-portfolio.png" alt="sorry" />
                        </div>
                        <div className='dashboard_editing_body_portfolio_project_info'>
                            <div className='dashboard_editing_body_portfolio_project_info_edit'>
                                <h5>Resturant Website Designs</h5> 
                                <img src="../../images/pen-edit.png" alt="sorry" /> 
                                <img src="../../images/trash-delete.png" alt="sorry" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                            <div className='resume_about_skills'>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>javascript</span>
                            </div>
                        </div>
                    </div>   
                    <div className='dashboard_editing_body_portfolio_project'>
                        <div className='dashboard_editing_body_portfolio_project_img'>
                            <img src="../../images/preview-portfolio.png" alt="sorry" />
                        </div>
                        <div className='dashboard_editing_body_portfolio_project_info'>
                            <div className='dashboard_editing_body_portfolio_project_info_edit'><h5>Resturant Website Designs</h5> <img src="../../images/pen-edit.png" alt="sorry" /> <img src="../../images/trash-delete.png" alt="sorry" /></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                            <div className='resume_about_skills'>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>javascript</span>
                            </div>
                        </div>
                        
                    </div>                            
                </div>
                <div className='dashboard_editing_body_education' >
                    <div className='dashboard_editing_body_education_header'>
                            <h4>Portfolio</h4>
                            <span>Add New</span>
                    </div>
                    <div className='dashboard_editing_body_education_step'>
                        <div className='dashboard_editing_body_education_step_info'>
                            <div className='dashboard_editing_body_education_step_info_edit'>
                                <h5>Resturant Website Designs</h5> 
                                <img src="../../images/pen-edit.png" alt="edit" /> 
                                <img src="../../images/trash-delete.png" alt="delete" />
                            </div>
                            <span>2015 - 2019</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                            
                        </div>
                    </div>
                    <div className='dashboard_editing_body_education_step'>
                        <div className='dashboard_editing_body_education_step_info'>
                            <div className='dashboard_editing_body_education_step_info_edit'>
                                <h5>Resturant Website Designs</h5> 
                                <img src="../../images/pen-edit.png" alt="sorry" /> 
                                <img src="../../images/trash-delete.png" alt="sorry" />
                            </div>
                            <span>2015 - 2019</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                            
                        </div>
                    </div>
                   
                </div>
                <div className='dashboard_editing_body_employment' >
                    <div className='dashboard_editing_body_employment_header'>
                            <h4>Portfolio</h4>
                            <span>Add New</span>
                    </div>
                <div className='dashboard_editing_body_employment_info'>
                        <div className='dashboard_editing_body_employment_info_edit'><h5>Resturant Website Designs</h5> <span>10 year Experience</span> <img src="../../images/pen-edit.png" alt="sorry" /> <img src="../../images/trash-delete.png" alt="sorry" /></div>
                        <span className='dashboard_editing_body_employment_info_span'>Past</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                            <div className='resume_about_skills'>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>javascript</span>
                            </div>    
                </div> 

                <div className='dashboard_editing_body_employment_info'>
                        <div className='dashboard_editing_body_employment_info_edit'><h5>Resturant Website Designs</h5> <span>10 year Experience</span> <img src="../../images/pen-edit.png" alt="sorry" /> <img src="../../images/trash-delete.png" alt="sorry" /></div>
                        <span className='dashboard_editing_body_employment_info_span'>Past</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                            <div className='resume_about_skills'>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>javascript</span>
                            </div>    
                </div>                  
                </div>
                
            </div>

        </div>

    </div>
      </>
  )
}

export default DashboardEditing