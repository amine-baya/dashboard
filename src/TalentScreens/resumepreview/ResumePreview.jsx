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
    useEffect(() => {

        const config = {
            headers: {
              Authorization: ` Bearer ${userInfo?.token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        axios.get('https://toptal.ibrcloud.com/api/v1/user/get-user-information', config).then(res =>{
          setData(res.data)
          setPersonalData(res.data)
         
          
        }).catch(err =>{
            console.err("must verify the url");
        })
        
    },[] )
    
         const globalSkills = data?.kips?.map(g => g.subcategory).flat()
        
       
  return (
      <>
      <Header /> 
    <div id='resume_preview'>
        <div className='resume_header'>
        <div>
            <h2><span>{data?.first_name} </span>{data?.last_name}</h2>
            <h3> {data?.professional}</h3>
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
        <div className='resume_portfolio_box'>
            <img src={ data?.project_images[0]  ? data.project_images[0] : "../../images/initial_project.jpg"} alt="project" />
            <div className='resume_portfolio_box_info'>
                <h4>{ data?.project_name ? data?.project_name : "...."}</h4> 
                <p>{data?.project_short_description ? data?.project_short_description : "................"} </p>
                <div className='resume_about_skills'>
                 { 
                 data ?
                       data.portfolio_services[0]?.subcategory?.map((skill,index)=>(<span key={index}>{skill}</span>))
                       : <span>skill</span>
                   }  
                </div>
            </div>
        </div>
        </div>
        </div>
        
        <div className="resume_employment">
        <h2 className='resume_title'>EMPLOYMENT</h2>
        <div className='resume_employment_container'>
        <div className='resume_employment_box'>
            <div className='resume_employment_box_info'>
                <div><h4>{ data?.position ? data.position : "........."}</h4><span>{data?.date_hire_from ? data.date_hire_from.slice(0,4) : "........"}-{data?.date_education_to ? data.date_hire_to.slice(0,4) : ".........." }</span></div>
                <span className='resume_employment_box_info_span'>{ parseInt(Date().slice(10,15)) ===  parseInt(data?.date_hire_to.slice(0,4)) ? "Active" : "Past" }</span>
                <p>{data?.emp_history_short_description ? data.emp_history_short_description : "........."} </p>
                <div className='resume_about_skills'>
                { 
                 data !== undefined ?
                       data.skills[0]?.subcategory?.map((skill,index)=>(<span key={index}>{skill}</span>))
                       : <span>skill</span>
                   }  
                </div>
            </div>
        </div>
       
        </div>
        </div>

        <div className="resume_employment resume_education">
        <h2 className='resume_title'>EDUCATION</h2>
        <div className='resume_employment_container'>
            <div className='resume_employment_box'>
                <div className='resume_employment_box_info'>
                    <div><h4>{data?.degree ? data.degree : "degree"}</h4><span>{data?.date_education_from ? data?.date_education_from.slice(0,4) : "..........."}-{data?.date_education_to ? data?.date_education_to.slice(0,4): "............"}</span></div>
                    <p>{data?.school ? data.school : "school"} </p>
                    
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