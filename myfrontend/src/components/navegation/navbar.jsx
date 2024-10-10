import { useEffect, useState } from "react"
import { connect } from "react-redux"
import LanguageChange from './menu/settings/LanguageChange.jsx'
import ThemeToggle from "./menu/settings/theme.jsx"
import './navbar.css'
import AppIcon from "./menu/icons/app_icon.jsx"
//<a href="" className="navbar-logo">log</a>
// Put Lenguage Change inside settings

function Navbar(){
  const [nabShadow, setNabShadow] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 )  {
        setNabShadow(true); // Add shadow when scrolled past 50px
      } else {
        setNabShadow(false); // Remove shadow when at the top
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Function to toggle menu
  const toggleMenu = () => {
    setMenuIsOpen(prevState => !prevState); // Toggle the state between true/false
  };

  return (
    <nav className={nabShadow ? 'navbar-shadow' : ''}>
      <AppIcon/>
      <button className="menu-movile" onClick={toggleMenu}> 
        <div className="menu-movile-icon">
          <div className={`bar-1 ${menuIsOpen ? 'open1' : 'close1'} `}> </div>
          <div className={`bar-2 ${menuIsOpen ? 'open2' : 'close2'} `}> </div>
          <div className={`bar-3 ${menuIsOpen ? 'open3' : 'close3'} `}> </div>
        </div>
      </button>
      <ul className={`nav-item-container ${menuIsOpen ? 'open-menu' : 'close-menu'} `}>     
          <li><LanguageChange/></li>
          <li><ThemeToggle/></li>
          <li><a href="" className="nav-item">   Proyects    <span></span></a></li>
          <li><a href="" className="nav-item">  Tecnologies  <span></span></a></li>
          <li><a href="" className="nav-item">     blog      <span></span></a></li>
          <li><a href="" className="nav-item">     about     <span></span></a></li>
          <li><a href="" className="nav-item">    contact    <span></span></a></li>
          <li><a href="" ><button className="nav-button-item" > Hire me 
            <div className="load-dot-line">
              <div className="dot d1"></div>
              <div className="dot d2"></div>
              <div className="dot d3"></div>
            </div>
            </button></a>
          </li>
      </ul> 
    </nav>
  )
}

const mapStateToProp = (state) => ({

})

export default connect(mapStateToProp, {

}) (Navbar)