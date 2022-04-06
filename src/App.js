import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { UserInfo } from "../src/helpers/ContextApi";
import ProfessionalNeedScreen from "./screens/professionalNeed/ProfessionalNeedScreen";
import ScheduleScreen from "./screens/schedule/ScheduleScreen";
import DateAndTime from "./screens/dateandtime/DateAndTime";
import SuccessfulScreen from "./screens/successful/SuccessfulScreen";
import VerificationScreen from "./screens/verification/VerificationScreen";
import CreatePassswordScreen from "./screens/createPassword/CreatePassswordScreen";
import LoginScreen from "./screens/login/LoginScreen";
import VerificationPasswordScreen from "./screens/verificationPassword/VerificationPasswordScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import ProfileEditeScreen from "./screens/profileEdite/ProfileEditeScreen";
import Form from "./screens/form/Form";
import Calender from './screens/calender/Calender';
import Register from './TalentScreens/register/Register';
import ResumePreview from './TalentScreens/resumepreview/ResumePreview';
import DashboardEditing from './TalentScreens/dashboardediting/DashboardEditing';
import { useEffect, useState } from 'react';
import TalentForm from './TalentScreens/talentForm/TalentForm';
import axios from 'axios';


function App() {

  const [userInfo,setUserInfo] = useState()
  const [personalData,setPersonalData] = useState([])
  const storageLocalData = localStorage.getItem('personalData') && JSON.parse(localStorage.getItem('personalData')) 
  const [select1 ,setSelect1] = useState(storageLocalData?.industries?.length > 0 ? storageLocalData?.industries[0].subcategory : [])
  const [select2 ,setSelect2] = useState(storageLocalData?.portfolio_services?.length > 0 ? storageLocalData?.portfolio_services[0].subcategory : [])
  const [select3 ,setSelect3] = useState(storageLocalData?.skills?.length > 0 ? storageLocalData?.skills[0].subcategory : [])
  const [sales ,setSales] = useState( storageLocalData?.kips[0] !== undefined ? storageLocalData?.kips[0]?.subcategory : [])
  const [marketing ,setMarketing] = useState( storageLocalData?.kips[1] !== undefined ? storageLocalData?.kips[1]?.subcategory : [])
  const [finance ,setFinance] = useState( storageLocalData?.kips[2] !== undefined ? storageLocalData?.kips[2]?.subcategory : [])
  const [development,setDevelopment] = useState( storageLocalData?.kips[3] !== undefined  ? storageLocalData?.kips[3]?.subcategory : [])
  
   useEffect(()  =>  {
     setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : [])

   }, [])

   useEffect(() => {
     if (userInfo) {    
       const config = {
           headers: {
             Authorization: ` Bearer ${userInfo?.token}`,
             'Content-Type': 'multipart/form-data',
           },
         }
       axios.get('https://toptal.ibrcloud.com/api/v1/user/get-user-information', config).then(res =>{      
         setPersonalData(res.data)      
       }).catch(err =>{
           console.err("must verify the url");
       })
     }

    
 }, [userInfo?.token])


  return (
    <UserInfo.Provider value={{userInfo, setUserInfo,personalData,setPersonalData, select1 ,
                              setSelect1,select2 ,setSelect2,select3,setSelect3,sales,setSales,
                              marketing,setMarketing,finance,setFinance,development,setDevelopment}}>

    <div className="App">
      
        <Router>
          <Routes>    
                <Route path="/" element={<Form />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<Register />} />
                <Route path="/professional-need" element={<ProfessionalNeedScreen />} />
                <Route path="/schedule" element={<ScheduleScreen />} />
                <Route path="/date-and-time" element={<DateAndTime />} />
                <Route path="/successful" element={<SuccessfulScreen />} />
                <Route path="/verification" element={<VerificationScreen />} />
                <Route path="/create-password" element={<CreatePassswordScreen />} />
                <Route path="/verification-password" element={<VerificationPasswordScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/profile-edit" element={<ProfileEditeScreen />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/resume" element={<ResumePreview />} />
                <Route path="/dashboard-editing" element={<DashboardEditing />} />
                <Route path="/talent" element={<TalentForm />} />





          </Routes>
        </Router>    
      
    </div>
    </UserInfo.Provider> 
  );
}

export default App;
