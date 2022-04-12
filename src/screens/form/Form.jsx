import React, { useState,useEffect } from "react";
import axios from 'axios'
import Header from "../../components/header/Header";
import { ContextApi } from "../../helpers/ContextApi";
import HomeScreen from "../../components/form/homeScreen/HomeScreen";
import KpisOneScreen from "../../components/form/kpisOneScreen/KpisOneScreen";
import ProjectDetailsScreen from "../../components/form/projectDetails/ProjectDetailsScreen";
import ProfessionalDetailsScreen from "../../components/form/professionalDetails/ProfessionalDetailsScreen";
import KpisTwoScreen from "../../components/form/kpisTwoScreen/KpisTwoScreen";

const Form = () => {

  const [select, setSelect] = useState([])
  const [roles,setRoles] = useState("")
  const [type,setType] = useState("") 
  const [page, setPage] = useState(0);
  const [data,setData] = useState([])
  const [details,setDetails] = useState([])


  useEffect(() => {
    axios.get('https://toptal.ibrcloud.com/api/v1/projects/all-Details').then(res =>{
      setData(res.data)
      console.log(res.data);
      
    }).catch(err =>{
      console.err("must verify the url");
    })
  }, [])

    const PageDisplay = () => {
        if (page === 0) {
          return <HomeScreen   data={data[0]}  />;

        } else if (page === 1) {
          return <KpisOneScreen  p data={data[1]} />;
        }else if (page === 2) {
            return <ProjectDetailsScreen  data={data[2]} />;
          }else if (page === 3) {
            return <ProfessionalDetailsScreen   data={data[3]} />;
          }
         else {
          return <KpisTwoScreen   data={data[4]} />;
        }
      };

  return (
    <>
    <Header /> 
    <ContextApi.Provider value={{select, setSelect,roles,setRoles,type,setType,details,setDetails,page,setPage}}>

      <div>{PageDisplay()}</div>
    </ContextApi.Provider> 

    </>
  )
}

export default Form