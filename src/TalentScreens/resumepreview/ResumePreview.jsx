import React, { useContext, useEffect, useState } from 'react'
import './resumePreview.css'
import Header from '../../components/header/Header'
import axios from 'axios'
import { UserInfo } from '../../helpers/ContextApi'
import { useNavigate } from 'react-router-dom'

const ResumePreview = () => {
    const [data, setData] = useState()
    const {userInfo,setPersonalData} = useContext(UserInfo)
    let navigate = useNavigate()

    console.log(data);
    
   
    useEffect(() => {
        
     
        const config = {
            headers: {
              Authorization: ` Bearer ${userInfo?.token}`,
              
            },
          }
         
        axios.get('https://toptal.ibrcloud.com/api/v1/user/get-user-information', config).then(res =>{
          setData(res.data)
          setPersonalData(res.data)
          console.log(res.data);
         
          
        }).catch(err =>{
            console.log("must verify the url");
            console.log(err);
        })
        
    },[userInfo?.token] )
    
         const globalSkills = data?.kips?.map(g => g.subcategory).flat()
        
       
  return (
      <>
        <Header /> 
    <div id='resume_preview'>
        <div className='resume_header'>
        <div>
            <h2><span>{data?.first_name} </span>{data?.last_name}</h2>
            <h3> {data?.professional_role}</h3>
            <p className='resume_header_title'>LOCATION</p>
            <p className='resume_header_info'>{data?.country ? data.country : "....."}</p>
            <p className='resume_header_title'>MEMBER SINCE</p>
            <p className='resume_header_info'>{data?.updatedAt ? data.updatedAt.slice(0,10) : "........"}</p>
            <p className='resume_header_available'>{data?.full_name} is now <span>available</span> for hire</p>
            <span className='resume_header_hire'>Hire Local</span>
            <span className='resume_header_btn'>Hire {data?.full_name ? data.full_name :"me"}</span>
        </div>
        <div className='resume_header_img'>
            <img src={data?.profile ? data.profile : "../../images/initial_profile.jpg" } alt="profile" />
        </div>
        </div>
        <div className='resume_about'>
            <h2 className='resume_title'>About</h2>
            <p>{data?.about_self ? data.about_self : "........................"}</p>
            <div className='resume_about_skills'>
            { 
                 globalSkills !== undefined ?
                 globalSkills?.map((skill,index)=>(<span key={index}>{skill}</span>))
                       : <span>skill</span>
                   } 
                
                

            </div>
        </div>

        <div className="resume_portfolio">
        <h2 className='resume_title'>Portfolio</h2>
        <div className='resume_portfolio_container'>

        {
                data &&
                data.portfolio.map((po)=>(
                    <div className='resume_portfolio_box'>
                    <img src={ po?.images[0]  ? po?.images[0] : "../../images/initial_project.jpg"} alt="project" />
                    <div className='resume_portfolio_box_info'>
                    <h4>{ po?.project_name ? po?.project_name : "...."}</h4> 
                    <p>{po?.short_description ? po?.short_description : "................"} </p>
                    <div className='resume_about_skills'>
                    
                   {

                    po.services[0]?.subcategory?.map((skill,index)=>(<span >{skill}</span>))
                   }
                        
                      
                </div>
            </div>
        </div> 

                ))
            }
           
           
        </div>
        </div>
        
        <div className="resume_employment">
        <h2 className='resume_title'>EMPLOYMENT</h2>
        <div className='resume_employment_container'>
         <div className='resume_employment_box'>
            <div className='resume_employment_box_info'>
                {
                    data !== undefined &&
                    data.employments.map((employment)=>(
                        <div className='resume_employment_box_info_container'>
                            <div className="resume_employment_box_info_position"><h4>{ employment?.position ? employment.position : "........."}</h4><span>{employment?.from ? employment.from.slice(0,4) : "........"}-{employment?.to ? employment.to.slice(0,4) : ".........." }</span></div>
                            <span className='resume_employment_box_info_span'>{ employment.current_employed ===  'yes' ? "Active" : "Past" }</span>
                            <p>{employment?.short_description ? employment.short_description : "........."} </p>
                            <div className='resume_about_skills'>
                            { 
                            employment !== undefined ?
                            employment.skills[0]?.subcategory?.map((skill,index)=>(<span key={index}>{skill}</span>))
                                : <span>skill</span>
                            }  
                            </div>
                        </div>
                        
                    ))
                }
               
            </div>
        </div> 
       
        </div>
        </div>

        <div className="resume_employment resume_education">
        <h2 className='resume_title'>EDUCATION</h2>
        <div className='resume_employment_container'>
            <div className='resume_employment_box'>
                <div className='resume_employment_box_info'>

                {
                    data !== undefined &&
                    data.educations.map((education)=>(
                        <div className='resume_employment_box_info_container'>
                           
                            <div><h4>{education.degree ? education.degree  : "degree"}</h4><span>{education?.from ? education?.from.slice(0,4) : "..........."}-{education?.to ? education?.to.slice(0,4): "............"}</span></div>
                            <p>{education?.school ? education.school : "school"} </p>
                        </div>
                        
                    ))
                }
                    
                </div>
            </div>
       
        </div>
        </div>
        <div className='move_from_resume'>
            <span className='move_from_resume_button' onClick={()=>{navigate('/calender')}}>
                  Next
            </span>
        </div>
    </div>  
      </>
  )
}

export default ResumePreview