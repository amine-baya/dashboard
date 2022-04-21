import React, { useEffect, useState } from 'react'
import './resumePreview.css'
import Header from '../../components/header/Header'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const ResumePreview = () => {
    const [data, setData] = useState()
    const {userInfo,setPersonalData} = useAuth()
    const [allEducation, setAllEducation] = useState([]);
    const [allEmployment, setAllEmployment] = useState([]);
    const [allPortfolio, setAllPortfolio] = useState([]);
    let navigate = useNavigate()
    
    
    // useEffect(() =>  {
    //     let one = "https://toptal.ibrcloud.com/api/v1/user/education-all"
    //     let two = "https://toptal.ibrcloud.com/api/v1/user/employment-all"
    //     let three = "https://toptal.ibrcloud.com/api/v1/user/portfolio-all"
    //     let four = "https://toptal.ibrcloud.com/api/v1/user/get-user-information"
    //     const config = {
    //         headers: {
    //        'Content-Type': 'application/json',
    //        Authorization: ` Bearer ${userInfo?.token}`,
   
    //         },
    //     }
    //     const requestOne =    axios.get("https://toptal.ibrcloud.com/api/v1/user/education-all",config);
    //     const requestTwo =    axios.get("https://toptal.ibrcloud.com/api/v1/user/employment-all",config);
    //     const requestThree =   axios.get("https://toptal.ibrcloud.com/api/v1/user/portfolio-all",config);
    //     const requestFour =   axios.get("https://toptal.ibrcloud.com/api/v1/user/get-user-information",config);

    //     axios.all([requestOne, requestTwo,requestThree,requestFour]).then(axios.spread((...responses) => {
    //         setAllEducation(responses[0].data)
    //         setAllEmployment(responses[1].data)
    //         setAllPortfolio(responses[2].data)
    //         setData(responses[3].data)
    //         setPersonalData(responses[3].data)
         
    //     })).catch(errors => {
        
    //         console.log(errors.response);
    //       })
    //     }, [userInfo?.token])

         useEffect(() => { 
            
             const config = {
                 headers: {
                'Content-Type': 'application/json',
                Authorization: ` Bearer ${userInfo?.token}`,
       
                 },
             }
  
             axios.get('https://toptal.ibrcloud.com/api/v1/user/education-all',config).then(res =>{
                setAllEducation(res.data)
            }).catch(err =>{
                console.err("must verify the url");
            })

            axios.get('https://toptal.ibrcloud.com/api/v1/user/employment-all',config).then(res =>{
                setAllEmployment(res.data)  
            }).catch(err =>{
                console.err("must verify the url");
            })

            axios.get('https://toptal.ibrcloud.com/api/v1/user/portfolio-all',config).then(res =>{
                setAllPortfolio(res.data)
                
            }).catch(err =>{
                console.err("must verify the url");
            })



             axios.get('https://toptal.ibrcloud.com/api/v1/user/get-user-information',config).then(res =>{
                 setData(res.data)
                 setPersonalData(res.data)  
             }).catch(err =>{
                 console.err("must verify the url");
             })
            
         },[userInfo] )
    
  
    
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
                allPortfolio &&
                allPortfolio.map((po)=>(
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
                    allEmployment !== undefined &&
                    allEmployment.map((employment)=>(
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
                    allEducation !== undefined &&
                    allEducation.map((education)=>(
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