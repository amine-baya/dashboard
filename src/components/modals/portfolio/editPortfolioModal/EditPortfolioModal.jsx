import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import Input from '../../../input/Input'
import Kpi4 from '../../../kpi4/Kpi4'
import TextArea from '../../../textarea/TextArea'



import './editPortfolioModal.css'
import useAuth from '../../../../hooks/useAuth'
import axios from 'axios'

const EditPortfolioModal = (props) => {

  const {userInfo, select2,setSelect2} = useAuth()
  const [imageProject,setImageProject] = useState([])
  const [projectName,setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [portfolioData,setPortfolioData] = useState("")
  const [portfolio_services, setportfolio_services] = useState()



  useEffect(()  =>  {
    const config = {
        headers: {
         'Content-Type' : 'application/json',
         'Accept' : 'application/json',
          Authorization: ` Bearer ${userInfo?.token}`,
        },
      }

     axios.get(`https://toptal.ibrcloud.com/api/v1/user/portfolio/${props?.id}`, config).then(res =>{    
      setProjectName(res.data.project_name)
      setImageProject(res.data.images[0])
      setProjectDescription(res.data.short_description)
     setportfolio_services(res.data.services) 
     setSelect2(res.data.services[0].subcategory)
    }).catch(err =>{
        console.log("must verify the url");
    })
  
}, [props?.id])
  

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


  const updatePortfolio = ()=>{

    const config = {
      headers: {
       'Content-Type' : 'application/json',
        Authorization: ` Bearer ${userInfo?.token}`,
      },
    }

    const portfolio =  {
      project_name: projectName,
      project_images: imageProject ,
      project_short_description:projectDescription,
      portfolio_services: portfolio_services,
      
      }

    axios.patch(`https://toptal.ibrcloud.com/api/v1/user/portfolio/${props?.id}`,portfolio, config).then(res => {
      console.log(res.data); 
  }).catch(err =>{
      console.log(err.response);
   })
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
                Edit Project
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div className='edit_img_project' >
                <img src="../../../../images/edit_project.png" alt="sorry" />
            </div>
            <div className='edit_inputs_project' >
            <div className='input_component'>
                  <label className='label'>Project Name</label>
                  <input type="text" placeholder="Enter Project Name" required value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
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
                <button classsName="btn_cancel_save" onClick={updatePortfolio}  style={{background: '#395F8C',marginLeft:'25px'}}>Save</button>
            </div>
           

          </Modal.Body>
          
         
        </Modal>
      )
}

export default EditPortfolioModal