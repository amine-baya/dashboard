import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import Kpi2 from '../../components/kpi2/Kpi2'
import './aboutme.css'

const AboutMe = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('https://toptal-node.herokuapp.com/api/v1/projects/all-Details').then(res =>{
          setData(res.data[1])
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
                <textarea id="story" name="story" >
                Tell us about yourself.
                </textarea> 
                <h4>Upload your CV</h4>
                <span className='upload_about_me'>Upload your CV</span>   
           </div>
            <p className='about_me_p'> What KPIs can you offer?</p>
           { data?.options?.map((option)=>(
            <Kpi2 title={option.name} options={option.subcategory}  />

            ))}
            
        </div>
            <Button text="Next: Profile"/>
    </div>
    </div>
  )
}

export default AboutMe