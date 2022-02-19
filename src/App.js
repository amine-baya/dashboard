import Header from "./components/header/Header";
import Kpi from "./components/Kpi/Kpi";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Title from "./components/title/Title";
import KpisInfo from './kpisInfo'
import Button from "./components/button/Button";
import HomeScreen from "./screens/homeScreen/HomeScreen";



function App() {
  console.log(KpisInfo)
  return (
    <div className="App">

      <Header />
      {/* <div className="kpis-Container">
      <Title title="Please select KPIs that you want this person to fulfill:" />
       { KpisInfo.map((kpi)=>(
        <Kpi title={kpi.title} options={kpi.options}  />

        ))}
        <Button />

      </div> */}
      <HomeScreen />
    </div>
  );
}

export default App;
