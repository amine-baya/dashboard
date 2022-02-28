import './header.css'
import {Outlet} from 'react-router-dom'


const Header=() => {
    return (
      <>
      <header>
          <div className="logo">
            <img src='../../images/logo.png' alt='logo' /> 
            <span>Apply as a talent</span>
          </div>
          <div >
            <div className="nav-sections">
                <ul>
                    <li>Home</li>
                    <li>Singapore</li>
                    <li>Why</li>
                    <li>In-demand-talents</li>
                    <li className='button-header'><button> Hire Talent</button></li>
                </ul>

            </div>
           

          </div>
          

      </header>
      <Outlet />

      </>
    );
  }
  
  export default Header;