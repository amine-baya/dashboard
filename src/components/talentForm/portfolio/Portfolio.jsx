import React, { useContext, useEffect, useState } from 'react'
import './portfolio.css'
import axios from 'axios'
import Title from '../../title/Title'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Kpi4 from '../../kpi4/Kpi4'
import { TalentContextApi, UserInfo } from '../../../helpers/ContextApi'


const Portfolio = () => {
  const {userInfo, select2} = useContext(UserInfo)
  const {setTalentPage,imageProject,setImageProject,projectDescription, setProjectDescription,projectName,setProjectName} = useContext(TalentContextApi)
  const [portfolioData,setPortfolioData] = useState([])
  const [portfolio_services, setportfolio_services] = useState()
  //const [image,setImage] = useState(personalData?.project_images)
  //const [projectDescription, setProjectDescription] = useState(personalData?.project_short_description)
  //const [projectName,setProjectName] = useState(personalData?.project_name)

   useEffect(() => {
     setportfolio_services([ {
       options: "service",
       subcategory: [...select2]
      
     } ])
   }, [ select2])


  useEffect(() => {
    axios.get('https://toptal.ibrcloud.com/api/v1/projects/portfolio-services').then(res =>{
      setPortfolioData(res.data)
    }).catch(err =>{
      console.log("must verify the url");
    })
  }, [])


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
    setTalentPage((currPage) => currPage + 1)

    const config = {
        headers: {
       'Content-Type': 'application/json',
       Authorization: ` Bearer ${userInfo.token}`,

        },
    }
      await axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-information',{project_name: projectName,project_images: imageProject,project_short_description: projectDescription, portfolio_services}, config).then(res => {
      console.log(res);
      
  }).catch(err =>{
      console.log(err);
   })
}




  return (
    <>
    <div className='container' id='Personal_information'>
        <div className='Personal_information_container'>
            <Title title={portfolioData?.question_text} />
            <div>
              {
                imageProject &&
                  <Carousel>
                    {
                      imageProject?.map((img)=>(
                      <div>
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
                  <input type="text" placeholder="Enter Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
            </div> 
              <label className='label'>Upload Image</label>
            <div className='Personal_information_info'>
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
              <Kpi4  options={option.subcategory} title={option.name}  /> 
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