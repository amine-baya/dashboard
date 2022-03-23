import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import Kpi from '../../components/Kpi/Kpi'
import UploadInput from '../../components/uploadInput/UploadInput'
import './aboutme.css'

const AboutMe = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('https://toptal-node.herokuapp.com/api/v1/kpis/show_all_kpis').then(res =>{
          setData(res.data)
          console.log(res.data);
        }).catch(err =>{
          console.log("must verify the url");
        })
      }, [])
  return (
    <div>
         <Header /> 
    <div className='container' id='about_me'>
        <div className='about_me_container'>
            <h3>About Me</h3>
          <div className='about_me_info'>
              <h5>Write a title that best describe you.</h5>
                <textarea id="story" name="story">
                  Tell us about yourself.
                </textarea> 
                <h4>Upload your CV</h4>
                <input type="file" id='file' className='upload_about_me' accept='image/*' />
                <label for="file">
                  Upload your CV***
                </label> 
           </div>
            <p className='about_me_p'> {data.question_text}</p>
           { data?.options?.map((option)=>(
            <Kpi title={option.name} options={option.subkpis}  />
            ))}
            
        </div>
            <Button text="Next: Profile"/>
    </div>
    </div>
  )
}

export default AboutMe