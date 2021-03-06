import axios from 'axios'
import React, {useEffect, useState } from 'react'
import slugify from 'slugify'
import './aboutme.css'
import Kpi3 from '../../kpi3/Kpi3'
import useAuth from "../../../hooks/useAuth"
import useTalent from "../../../hooks/useTalent"

const AboutMe = () => {
    const {setTalentPage,aboutText,setAboutText,cv,setCv} = useTalent()

    const {userInfo, data, setData, kips,personalData} = useAuth()
    
   
     
     useEffect(() => {
       let pro_role = slugify(`${personalData?.professional_role}`,{
         replacement: '_',
         lower: true
        })
       
      
        axios.get( `https://toptal.ibrcloud.com/api/v1/kpis/show_all_kpis/${pro_role}`).then(res =>{
          setData(res.data)
          console.log(res.data)
          
        }).catch(err =>{
          console.err("must verify the url");
        })
        
      }, [personalData])
        
      
      const uploadFileHandler = async (e) => {
        const files = e.target.files
        const file = new FormData()
        file.append('file', files[0])
      
           const config = {
             headers: {
               Authorization: ` Bearer ${userInfo?.token}`,
               'Content-Type': 'multipart/form-data',
             },
           }
           await axios.post('https://toptal.ibrcloud.com/api/v1/user/abour-cv-uploads',file, config).then(res => {
            setCv(res.data.cv)
            }).catch(err =>{
              console.log(err.response.data);
            })
      }
    
      const submitHandler = async (e) => {
        e.preventDefault()
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: ` Bearer ${userInfo?.token}`,
              },
          }
          if(aboutText === ""  || cv === ""   ) {
            console.log("verify inputs");
        }else{
         
          
          axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-information',{about_self: aboutText,cv:cv,kips: kips }, config).then(res => {
            console.log("done");
            setTalentPage((currPage) => currPage + 1)
              
        }).catch(err =>{
            console.log(err.response.data)
        })
        }
      }

  return (
    <div>
        
    <div className='container' id='about_me'>
        <div className='about_me_container'>
            <h3>About Me</h3>
          <div className='about_me_info'>
              <h5>Write a title that best describe you.</h5>
                <textarea id="story" name="story" placeholder='Tell us about yourself.' value={aboutText} onChange={(e)=>setAboutText(e.target.value)} >
                  
                </textarea> 
                <h4>Upload your CV</h4>
                <input type="file" id='file' className='upload_about_me'  onChange={uploadFileHandler}  />
                <label htmlFor="file">
                  Upload your CV***
                </label> 
           </div>
            <p className='about_me_p'> {data.question_text}</p>
           { data?.options?.map((option)=>(
             <div key={option.identifier}>

               <Kpi3 title={option.name} options={option.subkpis} data={data} />
             </div>
            ))}
            
        </div>
        <div>
        <span className='hr'></span>
        <div className='btn_contaienr'>
            <span className='btn_span btn_1'  >Back</span>
            <span className='btn_span btn_2' onClick={(e) => submitHandler(e)}>Profile</span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AboutMe