import React, {useEffect } from "react";
import axios from 'axios'
import Header from "../../components/header/Header";
import AboutMe from "../../components/talentForm/aboutme/AboutMe";
import PersonalInformation from "../../components/talentForm/PersonalInformation/PersonalInformation";
import Portfolio from "../../components/talentForm/portfolio/Portfolio";
import EmploymentHistory from "../../components/talentForm/employmenthistory/EmploymentHistory";
import Education from "../../components/talentForm/education/Education";
import Confirmation from "../../components/talentForm/confirmation/Confirmation";
import useAuth from "../../hooks/useAuth";
import {useNavigate } from "react-router-dom";
import useTalent from "../../hooks/useTalent";


const TalentForm = () => {

  const {userInfo} = useAuth()
  const {talentPage} = useTalent()
  let navigate = useNavigate()
  
  useEffect(() => {

 

    const config = {
      headers: {
       'Content-Type' : 'application/json',
       'Accept' : 'application/json',
        Authorization: ` Bearer ${userInfo?.token}`,
        
      },
    }

   

    axios.get('https://toptal.ibrcloud.com/api/v1/user/get-user-information', config).then(res =>{
      localStorage.setItem("personalData", JSON.stringify(res.data) )
      console.log(res.data.role);

      if(res.data.role === null){
        navigate('/linkedin-role')
      }
     

      
    }).catch(err =>{
        
        console.log(err.response.data);
    })
    
}, [userInfo?.token])


    const PageDisplay = () => {
        if (talentPage === 0) {
          return <AboutMe     />;

        } else if (talentPage === 1) {
          return <PersonalInformation     />;
        }else if (talentPage === 2) {
            return <Portfolio    />;
          }else if (talentPage === 3) {
            return <EmploymentHistory     />;
          }
          else if (talentPage === 4) {
            return <Education     />;
          }
         else {
          return <Confirmation     />;
        }
      };

  return (
    <>
    <Header /> 
    
      <div>{PageDisplay()}</div>
     

    </>
  )
}

export default TalentForm