import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { TalentContextApi, UserInfo } from '../../../helpers/ContextApi'
import './aboutme.css'
import Kpi3 from '../../kpi3/Kpi3'

const AboutMe = () => {
    const {userInfo,sales,marketing,finance,development} = useContext(UserInfo)
    const {setTalentPage,aboutText,setAboutText,cv,setCv} = useContext(TalentContextApi)
    const [data, setData] = useState([])
    const [subkpis1, setSubkpis1] = useState([])
    const [subkpis2, setSubkpis2] = useState([])
    const [subkpis3, setSubkpis3] = useState([])
    const [subkpis4, setSubkpis4] = useState([])


    useEffect(() => {
      
        axios.get('https://toptal.ibrcloud.com/api/v1/kpis/show_all_kpis').then(res =>{
          setData(res.data)
          
        }).catch(err =>{
          console.err("must verify the url");
        })
        
      }, [])
        
  
    useEffect(() => {
        setSubkpis1([ {
          options: "sales",
          subcategory: sales && [...sales]
        } ])
        setSubkpis2([ {
          options: "marketing",
          subcategory: marketing && [...marketing]
        } ])
        setSubkpis3([ {
          options: "finance",
          subcategory: finance && [...finance]
        } ])
        setSubkpis4([ {
          options: "development",
          subcategory: development && [...development]
        } ])
      }, [sales,marketing,finance,development])


      const uploadFileHandler = async (e) => {
        const files = e.target.files
        const file = new FormData()
        file.append('file', files[0])
      
           const config = {
             headers: {
               Authorization: ` Bearer ${userInfo.token}`,
               'Content-Type': 'multipart/form-data',
             },
           }
           await axios.post('https://toptal.ibrcloud.com/api/v1/user/abour-cv-uploads',file, config).then(res => {
            setCv(res.data.cv)
            }).catch(err =>{
              console.err(err);
            })
      }
    
      const submitHandler = async (e) => {
        e.preventDefault()
          const kips = [ subkpis1[0],subkpis2[0],subkpis3[0],subkpis4[0] ]
          console.log(kips);
          setTalentPage((currPage) => currPage + 1)
          const config = {
              headers: {
            'Content-Type': 'application/json',
            Authorization: ` Bearer ${userInfo.token}`,
              },
          }
         console.log(aboutText,cv,kips);
          if(aboutText === ""  || cv === ""   ) {
            console.log("verify inputs");
        }else{

             axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-information',{about_self: aboutText,cv:cv,kips: kips }, config).then(res => {
            console.log("done");
              
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

               <Kpi3 title={option.name} options={option.subkpis}  />
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