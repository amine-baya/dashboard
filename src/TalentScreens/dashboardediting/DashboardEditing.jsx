import React, { useEffect, useRef, useState } from 'react'
import './DashboardEditing.css'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import DashboardNavbar from '../../components/dashboardNavbar/DashboardNavbar'
import Title from '../../components/title/Title'
import EditEducationModal from '../../components/modals/education/editEducationModal/EditEducationModal'
import NewEducationModal from '../../components/modals/education/newEducationModal/NewEducationModal'
import EditPortfolioModal from '../../components/modals/portfolio/editPortfolioModal/EditPortfolioModal'
import NewPortfolioModal from '../../components/modals/portfolio/newPortfolioModal/NewPortfolioModal'
import EditAboutModal from '../../components/modals/editAboutModal/EditAboutModal'
import EditEmploymentModal from '../../components/modals/employment/editEmploymentModal/EditEmploymentModal'
import RemoveEmploymentModal from '../../components/modals/employment/removeEmploymentModal/RemoveEmploymentModal'
import NewEmploymentModal from '../../components/modals/employment/newEmploymentModal/NewEmploymentModal'
import ChangePhotoModal from '../../components/modals/changePhotoModal/ChangePhotoModal'
import useAuth from '../../hooks/useAuth'
import RemovePortfolioModal from '../../components/modals/portfolio/removePortfolioModal/RemovePortfolioModal'
import RemoveEducationModal from '../../components/modals/education/removeEducationModal/RemoveEducationModal'
import axios from 'axios'
import { UserInfo } from '../../helpers/ContextApi'


const DashboardEditing = () => {
    const [removeEducationModalShow, setRemoveEducationtModalShow] = useState({bool: false, id: ""});
    const [newEducationModalShow, setNewEducationtModalShow] = useState( false);
    const [editEducationModalShow, setEditEducationtModalShow] = useState({bool: false, id: ""});
    const [editPortfoliomodalShow, setEditPortfolioModalShow] = useState({bool: false, id: ""});
    const [newPortfoliomodalShow, setNewPortfolioModalShow] = useState(false);
    const [removePortfoliomodalShow, setRemovePortfolioModalShow] = useState({bool: false, id: ""});
    const [editAboutModalShow, setEditAboutModalShow] = useState(false);
    const [editEmploymentModalShow, setEditEmploymentModalShow] = useState({bool: false, id: ""});
    const [newEmploymentModalShow, setNewEmploymentModalShow] = useState(false);
    const [removeEmploymentModalShow, setRemoveEmploymentModalShow] = useState({bool: false, id: ""});
    const [changePhotoModalShow, setChangePhotoModalShow] = useState(false);
    const [allEducation, setAllEducation] = useState([]);
    const [allEmployment, setAllEmployment] = useState([]);
    const [allPortfolio, setAllPortfolio] = useState([]);
    const [exp, setExp] = useState([]);
    const ref = useRef(null);
    const {personalData,userInfo, dashbordEdit} = useAuth()
    
    useEffect(() =>  {

        // let x = 0;

        //     const intervalID = setInterval(function () {
        //         ref.current.click();
        //         console.log("Hi");
             
        //         if (++x === 5) {
        //             window.clearInterval(intervalID);
        //         }
        //      }, 200);
        
        
        let one = "https://toptal.ibrcloud.com/api/v1/user/education-all"
        let two = "https://toptal.ibrcloud.com/api/v1/user/employment-all"
        let three = "https://toptal.ibrcloud.com/api/v1/user/portfolio-all"
        const config = {
            headers: {
           'Content-Type': 'application/json',
           Authorization: ` Bearer ${userInfo?.token}`,
   
            },
        }
        const requestOne =    axios.get(one,config);
        const requestTwo =    axios.get(two,config);
        const requestThree =   axios.get(three,config);

        axios.all([requestOne, requestTwo,requestThree]).then(axios.spread((...responses) => {
            setAllEducation(responses[0].data)
            setAllEmployment(responses[1].data)
            setAllPortfolio(responses[2].data)
         
        })).catch(errors => {
        
            console.log("must verify the url");
          })
        }, [userInfo?.token, dashbordEdit])

        
        
    console.log(personalData);


    // const calcDate =(dateA, dateB,index)=>{
    //     /*
    //     * calcDate() : Calculates the difference between two dates
    //     * @date1 : "First Date in the format M-D-Y"
    //     * @date2 : "Second Date in the format M-D-Y"
    //     * return : Array
    //     */
    //     //Initiate date object
    //     const dt_date1 = new Date(dateA)
    //     const dt_date2= new Date(dateB)
    //     //Get the Timestamp
    //     let date1 =dt_date1.getTime()
    //     let date2 = dt_date2.getTime()
        
    //     let calc
    //     //Check which timestamp is greater
    //     if (date1 > date2){
    //         calc = new Date(date1 - date2) 
    //     }else{
    //         calc = new Date(date2 - date1) 
    //     }
    //     //Retrieve the date, month and year
    //     let calcFormatTmp = calc.getDate() + '-' + (calc.getMonth()+1)+ '-'+calc.getFullYear()
    //     //Convert to an array and store
    //     let calcFormat = calcFormatTmp.split("-")

    //     //Subtract each member of our array from the default date
    //     let days_passed = parseInt(Math.abs(calcFormat[0]) - 1);
    //     let months_passed = parseInt(Math.abs(calcFormat[1]) - 1);
    //     let years_passed = parseInt(Math.abs(calcFormat[2] -   1970));

    //     //Set up custom text
    //     const yrsTxt =["year", "years"];
    //     const mnthsTxt = ["month", "months"];
    //     const daysTxt = ["day", "days"];
    //     //Convert to days and sum together
    //     let total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;

    //     //display result with custom text
    //     const result = ((years_passed === 1) ? years_passed+ ' '+ yrsTxt[0] + ' ' : (years_passed > 1 )  ? 
    //     years_passed+ ' ' + yrsTxt[1] + ' ' : '') + 
    //     ((months_passed === 1) ? months_passed+ ' ' + mnthsTxt[0] :  (months_passed > 1) ? 
    //     months_passed+ ' ' + mnthsTxt[1] + ' ' : '') +
    //     ((days_passed === 1) ? days_passed+ ' ' + daysTxt[0] : (days_passed > 1) ? 
    //     days_passed+ ' ' + daysTxt[1] : '' );

    //     //Build our return value
    //     const retval = {
    //         "total_days" : Math.round(total_days),
    //         "result" :  result,
    //         "index" : index
    //     }

    //     //return the result
    //     setExp([...exp,retval])
    //     //return retval;
    //                     }

    //                    console.log(exp);
  return (
         <>
            <DashboardNavbar />
            <DashboardHeader />

                <EditEducationModal
                    id={editEducationModalShow.id}
                    show={editEducationModalShow.bool}
                    onHide={() => setEditEducationtModalShow(false)}
                    />
                 <NewEducationModal
                    show={newEducationModalShow}
                    onHide={() => setNewEducationtModalShow(false)}
                /> 
                <RemoveEducationModal
                    id={removeEducationModalShow.id}
                    show={removeEducationModalShow.bool}
                    onHide={() => setRemoveEducationtModalShow(false)}
                    />

                <EditPortfolioModal
                    id={editPortfoliomodalShow.id}
                    show={editPortfoliomodalShow.bool}
                    onHide={() => setEditPortfolioModalShow(false)}
                />
                <RemovePortfolioModal
                    id={removePortfoliomodalShow.id}
                    show={removePortfoliomodalShow.bool}
                    onHide={() => setRemovePortfolioModalShow(false)}
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
                    id={editEmploymentModalShow.id}
                    show={editEmploymentModalShow.bool}
                    onHide={() => setEditEmploymentModalShow(false)}
                />        
                <RemoveEmploymentModal
                    id={removeEmploymentModalShow.id}
                    show={removeEmploymentModalShow.bool}
                    onHide={() => setRemoveEmploymentModalShow(false)}
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
                                <img src={personalData?.profile} alt="profile" />
                            </div>
                            <h4>{personalData?.first_name} {personalData?.last_name} <span>- {personalData?.professional_role}</span></h4>
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
                            {personalData.about_self}
                            </p>
                            <p> Available Nominee:  <span>{personalData?.first_name} {personalData?.last_name}</span></p>
                            <p> Email: <span> {personalData?.email} </span></p>
                            <p> Phone: <span>001235125612</span></p>
                            <p> Location: <span>{personalData?.country}</span></p>


                        </div>
                        <div className='dashboard_editing_body_portfolio' >
                            <div className='dashboard_editing_body_portfolio_header'>
                                <h4>Portfolio</h4>
                                <span onClick={() => setNewPortfolioModalShow(true)}>Add New</span>
                            </div>                    
                            {allPortfolio  && allPortfolio?.map(el => (
                            <div className='dashboard_editing_body_portfolio_project'>
                               <div className='dashboard_editing_body_portfolio_project_img'>
                                    <img src={el?.images[0]} alt="project" />
                                </div>
                                <div className='dashboard_editing_body_portfolio_project_info'>
                                    <div className='dashboard_editing_body_portfolio_project_info_edit'>
                                        <h5>{el.project_name}</h5> 
                                        <img src="../../images/pen-edit.png" alt="edit"  onClick={() => {setEditPortfolioModalShow({bool: true, id: el._id}) }} /> 
                                        <img src="../../images/trash-delete.png" alt="sorry" onClick={() => {setRemovePortfolioModalShow({bool: true, id: el._id}) }} />
                                    </div>
                                    <p>{el.short_description} </p>
                                    <div className='resume_about_skills'>
                                        { el.services !==null && el?.services[0].subcategory.map(skill => (
                                            <span>{skill}</span>
                                        ))}
                                        
                                    </div> 
                                </div>
                            </div>
                        ))  }




                        </div>
                        <div className='dashboard_editing_body_education' >
                            <div className='dashboard_editing_body_education_header'>
                                    <h4>Education</h4>
                                    <span onClick={() => setNewEducationtModalShow(true)}>Add New</span>
                            </div>
                            {allEducation  && allEducation?.map(el => (
                           <div className='dashboard_editing_body_education_step'>
                           <div className='dashboard_editing_body_education_step_info'>
                               <div className='dashboard_editing_body_education_step_info_edit'>
                                   <h5>{el.degree}</h5> 
                                   <img src="../../images/pen-edit.png" alt="edit" onClick={() => {setEditEducationtModalShow({bool: true, id: el._id}) }}/>  
                                        <img src="../../images/trash-delete.png" alt="delete" onClick={() => {setRemoveEducationtModalShow({bool: true, id: el._id}) }}  />
                               </div>
                               <span>{el.from.slice(0,4)} - {el.to.slice(0,4)}</span>
                               <p>{el.school}</p>
                               
                           </div>
                       </div>
                        ))  }
                        </div>
                        <div className='dashboard_editing_body_employment' >
                            <div className='dashboard_editing_body_employment_header'>
                                    <h4>Employment</h4>
                                    <span onClick={() => setNewEmploymentModalShow(true)}>Add New</span>
                            </div>
                        {allEmployment  && allEmployment?.map((el,index )=> (
                            <div className='dashboard_editing_body_employment_info'>
                                <div className='dashboard_editing_body_employment_info_edit'><h5>{el.position}</h5>
                                <span>10 year Experience  </span> 
                                <img src="../../images/pen-edit.png" alt="edit" onClick={() => {setEditEmploymentModalShow({bool: true, id: el._id}) }}/> 
                                <img src="../../images/trash-delete.png" alt="delit" onClick={() => {setRemoveEmploymentModalShow({bool: true, id: el._id}) }}/>
                                </div>
                                <span className='dashboard_editing_body_employment_info_span'>{ el.current_employed !==null && el.current_employed ===  'yes' ? "Active" : "Past" }</span>
                                    <p>{ el.short_description !==null &&  el?.short_description} </p>
                                    <div className='resume_about_skills'>
                                        { el.skills !==null && el?.skills[0].subcategory.map(skill => (
                                            <span>{skill}</span>
                                        ))}
                                        
                                    </div>    
                            </div>
                        ))  }
                            

                                        
                        </div>
                        
                    </div>

                </div>

            </div>
      </>
  )
}

export default DashboardEditing