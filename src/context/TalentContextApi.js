import { createContext ,useState} from "react";

const TalentContextApi= createContext()
export const TalentContextApiProvider = ( {children}) => {


    const [talentPage, setTalentPage] = useState(0)
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


    

    
  
    



    return  (

    <TalentContextApi.Provider value={{talentPage,setTalentPage,aboutText, setAboutText,cv,setCv,
        image, setImage,ageVal, setageVal,countryVal, setCountryVal,nationalityVal, setNationalityVal,
        imageProject,setImageProject,projectDescription, setProjectDescription,projectName,setProjectName,
        isEmployed, setIsEmployed,positionName, setPositionName,employmentDescription, setEmploymentDescription,
        hireFrom, setHireFrom,hireTo, setHireTo, schoolVal, setschoolVal, degreeVal, setdegreeVal, 
        date_education_from, date_education_to, setdate_education_from, setdate_education_to}}>

          {children}
    </TalentContextApi.Provider> 
    )
}

export default TalentContextApi