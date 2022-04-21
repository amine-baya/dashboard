import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import './newPortfolioModal.css'
import useAuth from '../../../../hooks/useAuth'
import axios from 'axios'
import Kpi4 from '../../../kpi4/Kpi4'

const NewPortfolioModal = (props) => {


  const {userInfo, select2,setSelect2,dashbordEdit, setDashbordEdit} = useAuth()
  const [imageProject,setImageProject] = useState([])
  const [projectDescription, setProjectDescription] = useState("")
  const [projectName,setProjectName] = useState("")
  const [portfolioData,setPortfolioData] = useState("")
  const [portfolio_services, setportfolio_services] = useState()
  

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


  const addNewProject = async()=>{

    const portfolio = {
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
      if(projectName === "" || imageProject.length === 0  || projectDescription ==="" || portfolio_services[0].subcategory.length === 0  ) {
        console.log("verify inputs");
    }
    else{
        await axios.post('https://toptal.ibrcloud.com/api/v1/user/portfolio',portfolio, config).then(res => {
        console.log("done");
        setDashbordEdit(!dashbordEdit)

        setProjectName("")
        setImageProject([])
        setProjectDescription("")
        setSelect2([])
      }).catch(err =>{
        console.log(err.response);
      })
    }
    props.onHide()
  
  }

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add New Project
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            
            <div className='edit_inputs_project' >
            <div className='input_component'>
                  <label className='label'>Project Name</label>
                  <input type="text" placeholder="Enter Project Name" required value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
            </div> 
            <label className='label'>Upload Image</label>
            <div className='add_project_info_modal '>
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

            
            <div className='modal_buttons'>
                <button classsName='btn_cancel_modal' onClick={props.onHide} style={{color: '#395F8C',border:'1px solid #395F8C'}} >Cancel</button>
                <button classsName="btn_cancel_save" onClick={addNewProject}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default NewPortfolioModal