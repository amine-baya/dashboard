import React, { useState,useEffect } from "react";
import axios from 'axios'
import Button from "../../components/button/Button";
import HomeScreen from "../homeScreen/HomeScreen";
import KpisOneScreen from "../kpisOneScreen/KpisOneScreen";
import KpisTwoScreen from "../kpisTwoScreen/KpisTwoScreen";
import ProfessionalDetailsScreen from "../professionalDetails/ProfessionalDetailsScreen";
import ProjectDetailsScreen from "../projectDetails/ProjectDetailsScreen";
import Header from "../../components/header/Header";

const Form = () => {
  const [page, setPage] = useState(0);
  const [data,setData] = useState([])
  const [dataForm,setDataForm] = useState([])


  useEffect(() => {
    axios.get('https://toptal-node.herokuapp.com/api/v1/projects/all-Details').then(res =>{
      setData(res.data)
    }).catch(err =>{
      console.log("must verify the url");
    })
  }, [])
  console.log(data[4])

    const PageDisplay = () => {
        if (page === 0) {
          return <HomeScreen  page={page} setPage={setPage} data={data[0]}  />;

        } else if (page === 1) {
          return <KpisOneScreen  page={page} setPage={setPage} data={data[1]} />;
        }else if (page === 2) {
            return <ProjectDetailsScreen page={page} setPage={setPage} data={data[2]} />;
          }else if (page === 3) {
            return <ProfessionalDetailsScreen  page={page} setPage={setPage} data={data[3]} />;
          }
         else {
          return <KpisTwoScreen  page={page} setPage={setPage} data={data[4]} />;

        }
      };

  console.log(data,page);
  return (
    <>
    <Header /> 
    <div>{PageDisplay()}</div>

    </>
  )
}

export default Form