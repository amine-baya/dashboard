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




function App() {
  return (
    <div className="App">
       
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} ></Route>
          <Route path="/project-details" element={<ProjectDetailsScreen />} ></Route>
          <Route path="/kpis-one" element={<KpisOneScreen />} ></Route>
          <Route path="/professional-details" element={<ProfessionalDetailsScreen />} ></Route>
          <Route path="/kpis-two" element={<KpisTwoScreen />} ></Route>
          <Route path="/professional-need" element={<ProfessionalNeedScreen />} ></Route>

        </Routes>
      </Router>
       

      
      
    </div>
  );
}

export default App;
