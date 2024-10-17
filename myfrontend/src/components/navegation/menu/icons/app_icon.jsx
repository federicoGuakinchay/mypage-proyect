import { BiOutline } from 'react-icons/bi';
import './app_icon.css'
import { useNavigate } from 'react-router-dom';

function AppIcon (){
  // navetion var Links
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/'); // This navigates to the root path
  };
  return(
    <div className="navbar-title-container" >
      <div 
      className="navbar-title" 
      onClick={goToHome} 
      onKeyDown={(e)=>{if(e.key === 'Enter')goToHome();}} 
      style={{cursor:'pointer'}}
      tabIndex="0" 
      role='button'>
        <div className="nav-title-box1">
          <p >ONLY</p>
          <p>ONE</p>
        </div>
        <div className="nav-title-box2">
          <p >ANOTER</p>
          <p>DEVELOPER</p>
        </div>
      </div>
    </div>
  )
}
export  default AppIcon