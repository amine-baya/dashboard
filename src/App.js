import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
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




function App() {

  return (

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
          </Routes>
        </Router>    
      
    </div>
  );
}

export default App;
