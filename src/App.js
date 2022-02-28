import Header from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import ProjectDetailsScreen from "./screens/projectDetails/ProjectDetailsScreen";
import KpisOneScreen from "./screens/kpisOneScreen/KpisOneScreen";
import ProfessionalDetailsScreen from "./screens/professionalDetails/ProfessionalDetailsScreen";
import KpisTwoScreen from "./screens/kpisTwoScreen/KpisTwoScreen";
import ProfessionalNeedScreen from "./screens/professionalNeed/ProfessionalNeedScreen";
import ScheduleScreen from "./screens/schedule/ScheduleScreen";
import DateAndTime from "./screens/dateandtime/DateAndTime";
import SuccessfulScreen from "./screens/successful/SuccessfulScreen";
import VerificationScreen from "./screens/verification/VerificationScreen";
import CreatePassswordScreen from "./screens/createPassword/CreatePassswordScreen";
import LoginScreen from "./screens/login/LoginScreen";
import VerificationPasswordScreen from "./screens/verificationPassword/VerificationPasswordScreen";
import DashboardNavbar from "./components/dashboardNavbar/DashboardNavbar";
import DashboardHeader from "./components/dashboardHeader/DashboardHeader";
import ProfileScreen from "./screens/profile/ProfileScreen";
import ProfileEditeScreen from "./screens/profileEdite/ProfileEditeScreen";




function App() {
  return (
    <div className="App">
       
      <Router>
        {/* <Header /> */}
          {/* <DashboardNavbar />
          <DashboardHeader /> */}
        <Routes>
            <Route path="form" element={<Header />} >
                <Route path="home" element={<HomeScreen />}  />
                <Route path="kpis-one" element={<KpisOneScreen />} />
                <Route path="project-details" element={<ProjectDetailsScreen />} />
                <Route path="professional-details" element={<ProfessionalDetailsScreen />} />
                <Route path="kpis-two" element={<KpisTwoScreen />} />
                <Route path="professional-need" element={<ProfessionalNeedScreen />} />
                <Route path="schedule" element={<ScheduleScreen />} />
                <Route path="date-and-time" element={<DateAndTime />} />
                <Route path="successful" element={<SuccessfulScreen />} />
                <Route path="verification" element={<VerificationScreen />} />
                <Route path="create-password" element={<CreatePassswordScreen />} />
                <Route path="login" element={<LoginScreen />} />
                <Route path="verification-password" element={<VerificationPasswordScreen />} />
            </Route>
             <Route path="oo" element={<DashboardHeader />} >
                <Route index element={<DashboardNavbar />} />
                <Route path="profile" element={<ProfileScreen />} />
                <Route path="profile-edit" element={<ProfileEditeScreen />} />

            </Route> 
        </Routes>
      </Router>
       

      
      
    </div>
  );
}

export default App;
