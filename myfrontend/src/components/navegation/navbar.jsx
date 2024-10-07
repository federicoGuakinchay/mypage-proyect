import { useEffect, useState } from "react"
import { connect } from "react-redux"
import LanguageChange from './menu/settings/LanguageChange.jsx'
import ThemeToggle from "./menu/settings/theme.jsx"
import './navbar.css'
//<a href="" className="navbar-logo">log</a>
// Put Lenguage Change inside settings

function Navbar(){
  const [nabShadow, setNabShadow] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    if ( menuIsOpen ){
      setTimeout(() => {
        document.querySelector('.bar-1').classList.remove('open1')
        document.querySelector('.bar-2').classList.remove('open2')
        document.querySelector('.bar-3').classList.remove('open3')
      }, 10);
      document.querySelector('.bar-1').classList.add('close1')
      document.querySelector('.bar-2').classList.add('close2')
      document.querySelector('.bar-3').classList.add('close3')
    }else{
      setTimeout(() => {
        document.querySelector('.bar-1').classList.remove('close1')
        document.querySelector('.bar-2').classList.remove('close2')
        document.querySelector('.bar-3').classList.remove('close3')
      }, 10);
      document.querySelector('.bar-1').classList.add('open1')
      document.querySelector('.bar-2').classList.add('open2')
      document.querySelector('.bar-3').classList.add('open3')
    }
    setMenuIsOpen(prevState => !prevState); // Toggle the state between true/false
  };

  return (
    <nav className={nabShadow ? 'navbar-shadow' : ''}>
      <div className="navbar-title-container">
        <a href="" className="navbar-title">
          <div className="nav-title-box1">
            <p >ONLY</p>
            <p>ONE</p>
          </div>
          <div className="nav-title-box2">
            <p >ANOTER</p>
            <p>DEVELOPER</p>
          </div>
        </a>
      </div>
      <button className="menu-movile" onClick={toggleMenu}> 
        <div className="menu-movile-icon">
          <div className={`bar-1 ${menuIsOpen ? 'open1' : 'close1'} `}> </div>
          <div className={`bar-2 ${menuIsOpen ? 'open2' : 'close2'} `}> </div>
          <div className={`bar-3 ${menuIsOpen ? 'open3' : 'close3'} `}> </div>
        </div>
      </button>
      <ul className="nav-item-container">     
          <li><LanguageChange/></li>
          <li><ThemeToggle/></li>
          <li><a href="" className="nav-item">   Proyects    <span></span></a></li>
          <li><a href="" className="nav-item">  Tecnologies  <span></span></a></li>
          <li><a href="" className="nav-item">     blog      <span></span></a></li>
          <li><a href="" className="nav-item">    contact    <span></span></a></li>
          <li><a href="" className="nav-item">     about     <span></span></a></li>
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