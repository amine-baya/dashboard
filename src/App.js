import Header from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import ProjectDetailsScreen from "./screens/projectDetails/ProjectDetailsScreen";
import KpisOneScreen from "./screens/kpisOneScreen/KpisOneScreen";
import ProfessionalDetailsScreen from "./screens/professionalDetails/ProfessionalDetailsScreen";



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


        </Routes>
      </Router>
       

      
      
    </div>
  );
}

export default App;
