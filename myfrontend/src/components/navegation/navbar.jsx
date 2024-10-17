import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux"
import LanguageChange from './menu/settings/LanguageChange.jsx'
import ThemeToggle from "./menu/settings/theme.jsx"
import './navbar.css'
import AppIcon from "./menu/icons/app_icon.jsx"
import Language from "../../language.jsx"


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
  // navetion var Links
  const navigate = useNavigate();
  const goToProjects = () => {navigate('/projects'); };
  const goToTechnologies = () => {navigate('/technologies'); };
  const goToBlog = () => {navigate('/blog'); };
  const goToAbout = () => {navigate('/About'); };
  const goToContact = () => {navigate('/Contact'); };
  const goToHire = () => {navigate('/Hire'); };

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
          <li><div 
                onClick={goToProjects} 
                onKeyDown={(e)=>{if(e.key === 'Enter')goToProjects();}} 
                className="nav-item" 
                tabIndex="0" 
                role='button'>  
                <Language value={"link-proyects"}/> 
                <span></span>
          </div></li>
          <li><div 
                onClick={goToTechnologies} 
                onKeyDown={(e)=>{if(e.key === 'Enter')goToTechnologies();}} 
                className="nav-item" 
                tabIndex="0" 
                role='button'>  
                <Language value={"link-tecnologies"}/> 
                <span></span>
          </div></li>
          <li><div 
                onClick={goToBlog} 
                onKeyDown={(e)=>{if(e.key === 'Enter')goToBlog();}} 
                className="nav-item" 
                tabIndex="0" 
                role='button'>  blog <span></span>
          </div></li>
          <li><div 
                onClick={goToAbout} 
                onKeyDown={(e)=>{if(e.key === 'Enter')goToAbout();}} 
                className="nav-item" 
                tabIndex="0" 
                role='button'>  
                <Language value={"link-about"}/>       <span></span>
          </div></li>
          <li><div 
                onClick={goToContact} 
                onKeyDown={(e)=>{if(e.key === 'Enter')goToContact();}} 
                className="nav-item" 
                tabIndex="0" 
                role='button'>  
                <Language value={"link-contact"}/>     <span></span>
          </div></li>
          <li><div>
            <button className="nav-button-item" onClick={goToHire} > 
            <Language value={"link-hire"}/>  
            <div className="load-dot-line">
              <div className="dot d1"></div>
              <div className="dot d2"></div>
              <div className="dot d3"></div>
            </div>
            </button>
          </div></li>
      </ul> 
    </nav>
  )
}

const mapStateToProp = (state) => ({

})

export default connect(mapStateToProp, {

}) (Navbar)