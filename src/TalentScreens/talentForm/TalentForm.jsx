import React, { useState,useEffect } from "react";
import axios from 'axios'
import Header from "../../components/header/Header";
import { TalentContextApi } from "../../helpers/ContextApi";
import AboutMe from "../../components/talentForm/aboutme/AboutMe";
import PersonalInformation from "../../components/talentForm/PersonalInformation/PersonalInformation";
import Portfolio from "../../components/talentForm/portfolio/Portfolio";
import EmploymentHistory from "../../components/talentForm/employmenthistory/EmploymentHistory";
import Education from "../../components/talentForm/education/Education";
import Confirmation from "../../components/talentForm/confirmation/Confirmation";
import useAuth from "../../hooks/useAuth";


const TalentForm = () => {

  const {userInfo, setSelect1, setSelect2} = useAuth()
  const [talentPage, setTalentPage] = useState(0);
  const [aboutText, setAboutText] = useState("")
  const [cv,setCv] = useState("")
  const [image, setImage] = useState("")
  const [ageVal, setageVal] = useState("")
  const [countryVal, setCountryVal] = useState("")
  const [nationalityVal, setNationalityVal] = useState("")
  const [imageProject,setImageProject] = useState([])
  const [projectDescription, setProjectDescription] = useState("")
  const [projectName,setProjectName] = useState("")
  const [isEmployed, setIsEmployed] = useState("")
  const [positionName, setPositionName] = useState("")
  const [employmentDescription, setEmploymentDescription] = useState("")
  const [hireFrom, setHireFrom] = useState("")
  const [hireTo, setHireTo] = useState("")
  const [schoolVal, setschoolVal] = useState("")
  const [degreeVal, setdegreeVal] = useState("")
  const [date_education_from, setdate_education_from] = useState("")
  const [date_education_to, setdate_education_to] = useState("")
  
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
      console.log(res.data);
     
      //setSelect1(res.data.industries[0].subcategory);
      //setSelect2(res.data.portfolio_services[0].subcategory);
      //setAboutText(res.data.about_self)
      //setCv(res.data.cv)
      //setImage(res.data.profile)
      //setageVal(res.data.age)
      //setCountryVal(res.data?.country)
      //setNationalityVal(res.data?.nationality)
      //setImageProject(res.data.project_images)
      //setProjectDescription(res.data.project_short_description)
      //setProjectName(res.data.project_name)
      //setIsEmployed(res.data.current_employee)
      //setPositionName(res.data.position)
      //setEmploymentDescription(res.data.emp_history_short_description)
      //setHireFrom(res.data.date_hire_from)
      //setHireTo(res.data.date_hire_to)

      
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
    <TalentContextApi.Provider value={{talentPage,setTalentPage,aboutText, setAboutText,cv,setCv,
                                        image, setImage,ageVal, setageVal,countryVal, setCountryVal,nationalityVal, setNationalityVal,
                                        imageProject,setImageProject,projectDescription, setProjectDescription,projectName,setProjectName,
                                        isEmployed, setIsEmployed,positionName, setPositionName,employmentDescription, setEmploymentDescription,
                                        hireFrom, setHireFrom,hireTo, setHireTo, schoolVal, setschoolVal, degreeVal, setdegreeVal, 
                                        date_education_from, date_education_to, setdate_education_from, setdate_education_to}}>

      <div>{PageDisplay()}</div>
    </TalentContextApi.Provider> 

    </>
  )
}

export default TalentForm