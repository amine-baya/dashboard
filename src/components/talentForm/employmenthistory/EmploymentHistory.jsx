import React, { useContext, useEffect, useState } from 'react'
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import './EmploymentHistory.css'
import axios from 'axios';
import Title from '../../title/Title';
import Kpi5 from '../../kpi5/Kpi5';
import useAuth from '../../../hooks/useAuth';
import useTalent from '../../../hooks/useTalent';

const EmploymentHistory = () => {
    const {userInfo, select3, setSelect3} = useAuth()
    const {setTalentPage, isEmployed, setIsEmployed,positionName, setPositionName,employmentDescription, setEmploymentDescription,
      hireFrom, setHireFrom,hireTo, setHireTo} = useTalent()

    const [skils, setskils] = useState()
    const [mySkills, setMySkills] = useState([])

    useEffect(() => {
    setMySkills([ {
        options: "skills",
        subcategory: [...select3]
      } ])
    }, [ select3])


    useEffect(() => {
        axios.get('https://toptal.ibrcloud.com/api/v1/projects/get-skills').then(res =>{
            setskils(res.data)
            
        }).catch(err =>{
          console.err("must verify the url");
        })
      }, [])

      const submitHandler =  (e) => {
        e.preventDefault()
        setTalentPage((currPage) => currPage + 1)

        const employments =  {current_employed: isEmployed,
          position:positionName,
          emp_history_short_description: employmentDescription,
          date_hire_from: hireFrom,
          date_hire_to: hireTo,
          skills: mySkills
          }

        const config = {
            headers: {
           'Content-Type': 'application/json',
           Authorization: ` Bearer ${userInfo.token}`,
    
            },
        }
        if(isEmployed === "" || positionName === ""  || employmentDescription ==="" || hireFrom === "" || hireTo === "" || mySkills.length === 0  ) {
          console.log("verify inputs");
      }
      else{
          axios.post('https://toptal.ibrcloud.com/api/v1/user/employment',employments, config).then(res => {
          console.log("done");
          setIsEmployed("")
          setPositionName("")
          setEmploymentDescription("")
          setHireFrom("")
          setHireTo("")
          setSelect3([])
         
          
      }).catch(err =>{
          console.log(err);
       })
    }
          
    }

    
const addNewProject =()=>{

  
  const config = {
        headers: {
      'Content-Type': 'application/json',
      Authorization: ` Bearer ${userInfo.token}`,

        },
      }
    const employments =  {
      current_employed: isEmployed,
      position:positionName,
      emp_history_short_description: employmentDescription,
      date_hire_from: hireFrom,
      date_hire_to: hireTo,
      skills: mySkills
      }
   
    if(isEmployed === "" || positionName === ""  || employmentDescription ==="" || hireFrom === "" || hireTo === "" || mySkills.length === 0  ) {
      console.log("verify inputs");
  }
  else{
      axios.post('https://toptal.ibrcloud.com/api/v1/user/employment',employments, config).then(res => {
      console.log("done");
      setIsEmployed("")
      setPositionName("")
      setEmploymentDescription("")
      setHireFrom("")
      setHireTo("")
      setSelect3([])   
      
  }).catch(err =>{
      console.log(err.response);
   })
}


}

  return (
    
        <>
    <div className='container' id='Employment_history'>
        <div className='Employment_history_container'>
        <div className='Personal_information_header'>
             
             <>
             <Title title="Employment History" />
             <span className='addNewPeriod' onClick={()=>addNewProject()}>add new</span>
             </>

       </div>
            
            <div className='Portfolio_paragraph'>
                <h3>Tell us your most notable work experinces.</h3>
                <h4>
                Are you currently employed in this position?
                </h4>
               
                <div>
                    <div>
                        <input type="radio" name="check" value="yes" checked={isEmployed === "yes" && true} onChange={(e)=>{setIsEmployed(e.target.value)} } />
                        <label htmlFor="check">Yes</label>
                    </div>
                    <div>
                        <input type="radio" name="check" value="no" checked={isEmployed === "no" && true} onChange={(e)=>{setIsEmployed(e.target.value)} } />
                        <label htmlFor="check">No</label>
                    </div>
                </div>
                
            </div>
            <div className='input_component'>
                  <label className='label'>Position you are hired as</label>
                  <input type="text" placeholder="Position" value={positionName} onChange={(e) => setPositionName(e.target.value)}/>
            </div> 

            <h6>Time</h6>
            <div className='Portfolio_paragraph_grid'>
                <DatePickerComponent value={hireFrom} placeholder='From' onChange={(e) => setHireFrom(new Date(e.target.value).toISOString().slice(0, 10))}></DatePickerComponent>
                <DatePickerComponent value={hireTo} placeholder='To' onChange={(e) => setHireTo(new Date(e.target.value).toISOString().slice(0, 10))}></DatePickerComponent>
            </div>
            
            <div className="portfolio_description">
                <label className='label'>Short Description</label>
                <textarea id="story" name="story" placeholder='Add short description' value={employmentDescription} onChange={(e)=>setEmploymentDescription(e.target.value)} >
                      
                </textarea>
            </div>
             {
              
              <Kpi5  options={skils?.options} title={skils?.question_text}  /> 
              
            } 
          
           
        </div>
        <div>
          <span className='hr'></span>
          <div className='btn_contaienr'>
              <span className='btn_span btn_1' onClick={() => setTalentPage((currPage) => currPage - 1)} >Back</span>
              <span className='btn_span btn_2' onClick={(e) => submitHandler(e)} >Next: Education</span>
          </div>
        </div>
    </div>
    </>

  )
}

export default EmploymentHistory