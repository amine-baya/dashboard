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





function App() {

  const [userInfo,setUserInfo] = useState([])
  const [select1 ,setSelect1] = useState([])
  const [select2 ,setSelect2] = useState([])
  const [sales ,setSales] = useState([])
  const [marketing ,setMarketing] = useState([])
  const [finance ,setFinance] = useState([])
  const [development,setDevelopment] = useState([])
  
  useEffect(() => {
    setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : [])

  }, [])

  return (
    <UserInfo.Provider value={{userInfo, setUserInfo, select1 ,setSelect1,select2 ,setSelect2,sales,setSales,marketing,setMarketing,finance,setFinance,development,setDevelopment}}>

      

    <div className="App">
      
        <Router>
          <Routes>    
                <Route path="/" element={<Form />} />
                <Route path="/professional-need" element={<ProfessionalNeedScreen />} />
                <Route path="/schedule" element={<ScheduleScreen />} />
                <Route path="/date-and-time" element={<DateAndTime />} />
                <Route path="/successful" element={<SuccessfulScreen />} />
                <Route path="/verification" element={<VerificationScreen />} />
                <Route path="/create-password" element={<CreatePassswordScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/verification-password" element={<VerificationPasswordScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/profile-edit" element={<ProfileEditeScreen />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/about-me" element={<AboutMe />} />
                <Route path="/personal-information" element={<Personalinformation />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/employment-history" element={<EmploymentHistory />} />
                <Route path="/education" element={<Education />} /> */}
                <Route path="/preview" element={<ResumePreview />} />
                <Route path="/dashboard-editing" element={<DashboardEditing />} />
                <Route path="/talent" element={<TalentForm />} />





          </Routes>
        </Router>    
      
    </div>
    </UserInfo.Provider> 
  );
}

export default App;
