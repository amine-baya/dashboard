import logo from '../../images/logo.png'
import './header.css'

const Header=() => {
    return (
      <header>
          <div className="logo">
            <img src={logo} alt='logo' /> 
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
    );
  }
  
  export default Header;