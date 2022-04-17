import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {Routes, Route } from "react-router-dom";
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
import TalentForm from './TalentScreens/talentForm/TalentForm';
import Layout from './Layout';
import {LinkedInCallback} from 'react-linkedin-login-oauth2'

function App() {


  return (

    <div className="App">
      
        
          <Routes>    

            <Route path="/" element={<Layout />} >


                <Route path="" element={<LoginScreen />} />
                <Route path="client" element={<Form />} />
                <Route path="register" element={<Register />} />
                <Route path="professional-need" element={<ProfessionalNeedScreen />} />
                <Route path="schedule" element={<ScheduleScreen />} />
                <Route path="date-and-time" element={<DateAndTime />} />
                <Route path="successful" element={<SuccessfulScreen />} />
                <Route path="verification" element={<VerificationScreen />} />
                <Route path="create-password" element={<CreatePassswordScreen />} />
                <Route path="verification-password" element={<VerificationPasswordScreen />} />
                <Route path="profile" element={<ProfileScreen />} />
                <Route path="profile-edit" element={<ProfileEditeScreen />} />
                <Route path="calender" element={<Calender />} />
                <Route path="resume" element={<ResumePreview />} />
                <Route path="dashboard-editing" element={<DashboardEditing />} />
                <Route path="talent" element={<TalentForm />} />
                <Route path="linkedin" element={<LinkedInCallback />} />
                <Route path="*" element={<h1> noooo </h1> }/>


            </Route>

          </Routes>
         
      
    </div>

  );
}

export default App;
