import React, { useContext, useEffect, useState } from 'react'
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import './EmploymentHistory.css'
import axios from 'axios';
import Title from '../../title/Title';
import TalentButton from '../../talentButton/TalentButton';
import { TalentContextApi, UserInfo } from '../../../helpers/ContextApi';
import Kpi5 from '../../kpi5/Kpi5';

const EmploymentHistory = () => {
    const {userInfo, select3} = useContext(UserInfo)
    const {setTalentPage, isEmployed, setIsEmployed,positionName, setPositionName,employmentDescription, setEmploymentDescription,
      hireFrom, setHireFrom,hireTo, setHireTo} = useContext(TalentContextApi)

    const [skils, setskils] = useState()
    // const [isEmployed, setIsEmployed] = useState(personalData?.current_employee)
    // const [positionName, setPositionName] = useState(personalData?.position)
    // const [employmentDescription, setEmploymentDescription] = useState(personalData?.emp_history_short_description)
    // const [hireFrom, setHireFrom] = useState(personalData?.date_hire_from)
    // const [hireTo, setHireTo] = useState(personalData?.date_hire_to)
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
            console.log(res.data);
        }).catch(err =>{
          console.log("must verify the url");
        })
      }, [])

      const submitHandler = async (e) => {
        e.preventDefault()
        setTalentPage((currPage) => currPage + 1)

        const config = {
            headers: {
           'Content-Type': 'application/json',
           Authorization: ` Bearer ${userInfo.token}`,
    
            },
        }
          await axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-information',
          {current_employee: isEmployed,
           position:positionName,
           emp_history_short_description: employmentDescription,
           date_hire_from: hireFrom,
           date_hire_to: hireTo,
           skills: mySkills
        }, config).then(res => {
          console.log(res);
          
      }).catch(err =>{
          console.log(err);
       })
    }

  return (
    
        <>
    <div className='container' id='Employment_history'>
        <div className='Employment_history_container'>
            <Title title="Employment History" />
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