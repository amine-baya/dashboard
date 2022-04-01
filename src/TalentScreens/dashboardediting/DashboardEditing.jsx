import React, { useState } from 'react'
import './DashboardEditing.css'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import DashboardNavbar from '../../components/dashboardNavbar/DashboardNavbar'
import Title from '../../components/title/Title'
import EditEducationModal from '../../components/modals/editEducationModal/EditEducationModal'
import NewEducationModal from '../../components/modals/newEducationModal/NewEducationModal'
import EditPortfolioModal from '../../components/modals/editPortfolioModal/EditPortfolioModal'
import NewPortfolioModal from '../../components/modals/newPortfolioModal/NewPortfolioModal'
import EditAboutModal from '../../components/modals/editAboutModal/EditAboutModal'
import EditEmploymentModal from '../../components/modals/editEmploymentModal/EditEmploymentModal'
import NewEmploymentModal from '../../components/modals/newEmploymentModal/NewEmploymentModal'
import ChangePhotoModal from '../../components/modals/changePhotoModal/ChangePhotoModal'

const DashboardEditing = () => {
    const [editmodalShow, setEditModalShow] = useState(false);
    const [newModalShow, setNewModalShow] = useState(false);
    const [editPortfoliomodalShow, setEditPortfolioModalShow] = useState(false);
    const [newPortfoliomodalShow, setNewPortfolioModalShow] = useState(false);
    const [editAboutModalShow, setEditAboutModalShow] = useState(false);
    const [editEmploymentModalShow, setEditEmploymentModalShow] = useState(false);
    const [newEmploymentModalShow, setNewEmploymentModalShow] = useState(false);
    const [changePhotoModalShow, setChangePhotoModalShow] = useState(false);



  return (
         <>
            <DashboardNavbar />
            <DashboardHeader />

                <EditEducationModal
                    show={editmodalShow}
                    onHide={() => setEditModalShow(false)}
                    />
                <NewEducationModal
                    show={newModalShow}
                    onHide={() => setNewModalShow(false)}
                />

                <EditPortfolioModal
                    show={editPortfoliomodalShow}
                    onHide={() => setEditPortfolioModalShow(false)}
                />
                <NewPortfolioModal
                    show={newPortfoliomodalShow}
                    onHide={() => setNewPortfolioModalShow(false)}
                /> 
                <EditAboutModal
                    show={editAboutModalShow}
                    onHide={() => setEditAboutModalShow(false)}
                /> 
                <EditEmploymentModal
                    show={editEmploymentModalShow}
                    onHide={() => setEditEmploymentModalShow(false)}
                />        
                <NewEmploymentModal
                    show={newEmploymentModalShow}
                    onHide={() => setNewEmploymentModalShow(false)}
                /> 
                <ChangePhotoModal
                    show={changePhotoModalShow}
                    onHide={() => setChangePhotoModalShow(false)}
                /> 
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
                                <img src="../../images/preview-img.png" alt="profile" />
                            </div>
                            <h4>Austin Robertson <span>-Graphic designer</span></h4>
                        </div>
                        <div className='dashboard_editing_header_button' >        
                                <span onClick={() => setChangePhotoModalShow(true)}>
                                    Change Picture
                                </span>
                        </div>
                    </div>

                    <div className='dashboard_editing_body'>
                        <div className='dashboard_editing_body_about' >
                            <div className='dashboard_editing_body_about_header'>
                                <h4>About</h4>
                                <img src="../../images/pen-edit.png" alt="edit" onClick={() => setEditAboutModalShow(true)}  /> 
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
                                <span onClick={() => setNewPortfolioModalShow(true)}>Add New</span>
                            </div>
                            <div className='dashboard_editing_body_portfolio_project'>
                                <div className='dashboard_editing_body_portfolio_project_img'>
                                    <img src="../../images/preview-portfolio.png" alt="sorry" />
                                </div>
                                <div className='dashboard_editing_body_portfolio_project_info'>
                                    <div className='dashboard_editing_body_portfolio_project_info_edit'>
                                        <h5>Resturant Website Designs</h5> 
                                        <img src="../../images/pen-edit.png" alt="edit"  onClick={() => setEditPortfolioModalShow(true)} /> 
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
                        </div>
                        <div className='dashboard_editing_body_education' >
                            <div className='dashboard_editing_body_education_header'>
                                    <h4>Education</h4>
                                    <span onClick={() => setNewModalShow(true)}>Add New</span>
                            </div>
                            <div className='dashboard_editing_body_education_step'>
                                <div className='dashboard_editing_body_education_step_info'>
                                    <div className='dashboard_editing_body_education_step_info_edit'>
                                        <h5>Resturant Website Designs</h5> 
                                        <img src="../../images/pen-edit.png" alt="edit" onClick={() => setEditModalShow(true)} />  
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
                                    <h4>Employment</h4>
                                    <span onClick={() => setNewEmploymentModalShow(true)}>Add New</span>
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
                                <div className='dashboard_editing_body_employment_info_edit'>
                                    <h5>Resturant Website Designs</h5> <span>10 year Experience</span>
                                    <img src="../../images/pen-edit.png" alt="sorry" onClick={() => setEditEmploymentModalShow(true)} /> 
                                    <img src="../../images/trash-delete.png" alt="sorry" />
                                </div>
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