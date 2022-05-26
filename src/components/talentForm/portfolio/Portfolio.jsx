import React, { useContext, useEffect, useState } from 'react'
import slugify from 'slugify'
import './portfolio.css'
import axios from 'axios'
import Title from '../../title/Title'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Kpi4 from '../../kpi4/Kpi4'

import useAuth from '../../../hooks/useAuth';
import useTalent from '../../../hooks/useTalent';


const Portfolio = () => {
  const {userInfo, select2,setSelect2,personalData} = useAuth()
  const {setTalentPage,imageProject,setImageProject,projectDescription, setProjectDescription,projectName,setProjectName} = useTalent()
  const [portfolioData,setPortfolioData] = useState([])
  const [portfolio_services, setportfolio_services] = useState()
  

   useEffect(() => {
     setportfolio_services([ {
       options: "service",
       subcategory: [...select2]
      
     } ])

     
   }, [ select2])


  useEffect(() => {
    let pro_role = slugify(`${personalData?.professional_role}`,{
      replacement: '_',
      lower: true
     })
    axios.get(`https://toptal.ibrcloud.com/api/v1/projects/portfolio-services/${pro_role}`).then(res =>{
      setPortfolioData(res.data)
    }).catch(err =>{
      console.log("must verify the url");
    })
  }, [personalData])


  const uploadFileHandler = async (e) => {
    const files = e.target.files
    const formData = new FormData()

    for ( let file of files) {
      
      console.log(file);

      formData.append('image', file)
      
    }
       const config = {
         headers: {
           Authorization: ` Bearer ${userInfo.token}`,
           'Content-Type': 'multipart/form-data',
         },
       }
       await axios.post('https://toptal.ibrcloud.com/api/v1/user/portfolio-image-uploads',formData, config).then(res => {
        setImageProject([...res.data.image])
        }).catch(err =>{
          console.err(err);
        })
  }

  const submitHandler = async (e) => {

    e.preventDefault()
    
    
   const portfolio =  {
     project_name: projectName,
     project_images : imageProject,
     project_short_description: projectDescription,
     portfolio_services: portfolio_services,
    
  } 


    const config = {
        headers: {
       'Content-Type': 'application/json',
       Authorization: ` Bearer ${userInfo.token}`,

        },
    }
    
    if(projectName === "" || imageProject.length === 0  || projectDescription ===""  ) {
      console.log("verify inputs");
  }
  else{
    
      await axios.post('https://toptal.ibrcloud.com/api/v1/user/portfolio/',portfolio, config).then(res => {
      console.log("done");
     setTalentPage((currPage) => currPage + 1)
      setProjectName("")
      setImageProject([])
      setProjectDescription("")
      setSelect2([])

     
      
  }).catch(err =>{
      console.log(err);
   })
}
  }

const addNewProject = async()=>{

  const portfolio =  {
    project_name: projectName,
    project_images : imageProject,
    project_short_description: projectDescription,
    portfolio_services: portfolio_services,
  
 } 
      const config = {
        headers: {
      'Content-Type': 'application/json',
      Authorization: ` Bearer ${userInfo.token}`,

        },
    }
    if(projectName === "" || imageProject.length === 0  || projectDescription ===""  ) {
      console.log("verify inputs");
  }
  else{
      await axios.post('https://toptal.ibrcloud.com/api/v1/user/portfolio',portfolio, config).then(res => {
      console.log("done");
      setProjectName("")
      setImageProject([])
      setProjectDescription("")
      setSelect2([])
  }).catch(err =>{
      console.log(err.response);
   })
}

}



  return (
    <>
    <div className='container' id='Personal_information'>
        <div className='Personal_information_container'>
          <div className='Personal_information_header'>
            {
              imageProject.length > 0 ? (
                <>
                <Title title={portfolioData?.question_text} />
                <span className='addNewPeriod' onClick={()=>addNewProject()}>add new</span>
                </>

              ): (<Title title={portfolioData?.question_text} />)

            }
          </div>
            <div>
              {
                imageProject &&
                  <Carousel>
                    {
                      imageProject?.map((img,index)=>(
                      <div key={index}>
                          <img src={img} alt="project" />
                          
                      </div>

                      ))
                    }
                      
                  </Carousel>
              }
            </div>
            <div className='Portfolio_paragraph'>
                <p>
                  Tell us about projects you have worked on that you are most proud of.
                </p>
            </div>
            <div className='input_component'>
                  <label className='label'>Project Name</label>
                  <input type="text" placeholder="Enter Project Name" required value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
            </div> 
              <label className='label'>Upload Image</label>
            <div className='Personal_information_info '>
                  <input type="file" id='file' className='upload_about_me' accept='image/*' multiple  onChange={uploadFileHandler} />
                  <label htmlFor="file">
                    <img src="../../images/plus-blue.png" alt="plus" /> Upload Image/URLs
                  </label> 
            </div>
            <div className="portfolio_description">
                <label className='label'>Short Description</label>
                <textarea id="story" name="story" placeholder='Add short description' value={projectDescription} onChange={(e)=>setProjectDescription(e.target.value)} >
                      
                </textarea>
            </div>
            {
              portfolioData?.options?.map((option)=>(
                <div key={option.identifier}> 
                  <Kpi4  options={option.subcategory} title={option.name}  /> 
                </div>
              ))
            }

        </div>
        <div>
          <span className='hr'></span>
          <div className='btn_contaienr'>
              <span className='btn_span btn_1' onClick={() => setTalentPage((currPage) => currPage - 1)} >Back</span>
              <span className='btn_span btn_2' onClick={(e) => submitHandler(e)} >Next: Profile</span>
          </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio