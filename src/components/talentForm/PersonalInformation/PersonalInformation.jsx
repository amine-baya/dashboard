import React, {useContext, useEffect, useState } from 'react'
import './PersonalInformation.css'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Kpi2 from '../../kpi2/Kpi2'
import useAuth from '../../../hooks/useAuth'
import useTalent from '../../../hooks/useTalent'

const PersonalInformation = () => {

  const {userInfo,personalData, select1} = useAuth()
  const {setTalentPage,image, setImage,ageVal, setageVal,countryVal, setCountryVal,nationalityVal, setNationalityVal} = useTalent()
  const [age, setAge] = useState([])
  const [country, setCountry] = useState(null)
  const [nationality, setNationality] = useState(null)
  const [industries, setIndustries] = useState([])
  const [industriesVal, setindustriesVal] = useState([])


  useEffect(() => {
    setindustriesVal([ {
      options: "industries",
      subcategory: [...select1]
    } ])
  }, [ select1])
  
  useEffect(() =>  {

      let one = "https://toptal.ibrcloud.com/api/v1/ages"
      let two = "https://toptal.ibrcloud.com/api/v1/country"
      let three = "https://toptal.ibrcloud.com/api/v1/nationality"
      let four = "https://toptal.ibrcloud.com/api/v1/projects/industries"

      const requestOne =    axios.get(one);
      const requestTwo =    axios.get(two);
      const requestThree =  axios.get(three);
      const requestFour =   axios.get(four);

      
      setImage(personalData?.profile)
      axios.all([requestOne, requestTwo, requestThree,requestFour]).then(axios.spread((...responses) => {
        setAge(responses[0].data)
        setCountry(responses[1].data)
        setNationality(responses[2].data)
        setIndustries( responses[3]?.data)
          
      
      })).catch(errors => {
      
          console.log("must verify the url");
        })
      }, [])


      const uploadFileHandler = async (e) => {
        const files = e.target.files
        const formData = new FormData()
        formData.append('image', files[0])
   
           const config = {
             headers: {
               Authorization: ` Bearer ${userInfo.token}`,
               'Content-Type': 'multipart/form-data',
             },
           }
           await axios.post('https://toptal.ibrcloud.com/api/v1/user/portfolio-image-uploads',formData, config).then(res => {
             setImage(res.data.image[0])
         
         }).catch(err =>{
           console.log(err.response.data,"noo");
        })
   }

      const ageHandler = (e) => {
        document.querySelectorAll('.Personal_information_age_grid div').forEach(n => n.classList.remove('active'))
         e.target.parentElement.nodeName === "DIV" && e.target.parentElement.classList.toggle("active");

        setageVal(e.target.parentElement.getAttribute('value'))
      }

    const submitHandler = async (e) => {
      e.preventDefault()
      setTalentPage((currPage) => currPage + 1)

      const config = {
          headers: {
         'Content-Type': 'application/json',
         Authorization: ` Bearer ${userInfo.token}`,
 
          },
      }
      
      if(image === ""  || ageVal === "" || countryVal === "" || nationalityVal === ""   ) {
        console.log("verify inputs");
    }else{
        await axios.patch('https://toptal.ibrcloud.com/api/v1/user/add-more-information',{profile: image, age: ageVal,country:countryVal,nationality:nationalityVal, industries: industriesVal}, config).then(res => {
        console.log("done");
        
      }).catch(err =>{
          console.log(err.response.data);
      })
      }
  }

  return (
    <div>
    <div className='container' id='Personal_information'>
        <div className='Personal_information_container'>
            <h3>Personal Information</h3>
            <div className='Personal_information_title'>
                <h5>For the purpose of industry regulation, your details are required.</h5>
                <h4>Upload an image that clearly show your face. </h4>
           </div>
            <div className='Personal_information_info'> 
                <img src={image ? image : "../../images/initial_profile.jpg"} alt="profile" className='Personal_information_info_profile_img'  />
                <input type="file" id='file' className='upload_about_me' accept='image/*'  onChange={uploadFileHandler} />
                <label htmlFor="file">
                <img src="../../images/plus-blue.png" alt="plus" /> Add Profile Photo
                </label> 
            </div>
            <div className='Personal_information_age'>
              <h5>What is your age?</h5>
              <div className='Personal_information_age_grid'>
                { age?.map((el,indx)=>(
                  <div onClick={(e) => ageHandler(e)} value={el.age} key={indx}>
                    <span className='item' > {el.age}  </span>  <img className='img_plus' src="../../images/plus.png" alt="plus" /> <img className='img_correct' src='./images/correct.png' alt="plus"/>
                  </div>
                    ))}
              </div>
            </div>

            <div className='Personal_information_location'>
              <h3>Current location:</h3>
                <div className='Personal_information_grid'>
                <div>
                  <label >Country</label>
                  <Form.Select aria-label="Default select example" value={countryVal} onChange={(e) => setCountryVal(e.target.value)} >
                  <option>select</option>
                  { country?.map((el,indx)=>(
                    <option key={indx} value={el.country_name}>{el.country_name}</option> 
                    ))}
                  
                </Form.Select>
                </div>
                <div>
                  <label >City or State</label>
                  <Form.Select aria-label="Default select example" value={nationalityVal}  onChange={(e) => setNationalityVal(e.target.value)}>
                  <option>select</option>
                  { nationality?.map((el,indx)=>(
                    <option key={indx} value={el.nationality}>{el.nationality}</option> 
                    ))}
                </Form.Select>
                </div>
                </div>
            </div>
           <h4>{industries?.question_text}</h4>
        {
              industries?.options?.map((option)=>(
                <div key={option.identifier}>
                  <Kpi2 title={option.name} options={option.subcategory} identifier={industries.identifier}  />
                </div>
            ))   
        }
      
          
        </div>
        <div>
          <span className='hr'></span>
          <div className='btn_contaienr'>
              <span className='btn_span btn_1' onClick={() => setTalentPage((currPage) => currPage - 1)} >Back</span>
              <span className='btn_span btn_2' onClick={(e) => submitHandler(e)} >Next: Portfolio</span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default PersonalInformation
