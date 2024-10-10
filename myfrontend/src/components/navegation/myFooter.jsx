import { useState } from "react";
import { connect } from "react-redux"
import AppIcon from "./menu/icons/app_icon";
import './footer.css'

function MyFooter(){
  const [menuIsOpen1, setMenuIsOpen1] = useState(false);
  const toggleMenu1 = () => {
    setMenuIsOpen1(prevState => !prevState); // Toggle the state between true/false
  };
  const [menuIsOpen2, setMenuIsOpen2] = useState(false);
  const toggleMenu2 = () => {
    setMenuIsOpen2(prevState => !prevState); // Toggle the state between true/false
  };
  const [menuIsOpen3, setMenuIsOpen3] = useState(false);
  const toggleMenu3 = () => {
    setMenuIsOpen3(prevState => !prevState); // Toggle the state between true/false
  };
  
  return (
    <div className="footer">
      <div className="footer-details-content">
        <div className="footer-app-icon-content">
          <AppIcon/>
        </div>
        <div className="page-details">
          <div onClick={toggleMenu1} className={`details-content ${menuIsOpen1 ? 'expand-menu-contact':''}`}>
            
            <div className="details-title">contact 
              <div className="svg-deployment-menu">
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px"       fill="#e8eaed" className={menuIsOpen1 ? 'svg-open-footer':'svg-close-footer'}>
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                </svg>
              </div>
            </div>
            
            <ul>
              <li>Mendoza</li>
              <li>not avail local yet</li>
              <li>
                <a href="" className="details-link-item" >client@mail.com <span></span></a>
              </li>
              <li>phone</li>
              <li>not avail phone yet</li>
            </ul>
          </div>

          <div onClick={toggleMenu2} className={`details-content ${menuIsOpen2 ? 'expand-menu-this-page':''}`}>
            <div className="details-title">this page 
              <svg xmlns="http://www.w3.org/2000/svg"  height="60px" viewBox="0 -960 960 960" width="60px" fill="#e8eaed" className={menuIsOpen2 ? 'svg-open-footer':'svg-close-footer'}>
                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
              </svg>
            </div>
            
            <ul>
              <li>
                <a href="" className='details-link-item'>   Home   <div></div> <span></span></a>
                <div className={`${document.URL==='http://localhost:5173/' ? 'here-footer': 'not-here-footer' }`}>you`re here</div>
              </li>
              <li>
                <a href="" className='details-link-item'>   Proyects   <div></div> <span></span></a>
                <div className={`${document.URL==='' ? 'here-footer': 'not-here-footer' }`}>you`re here</div>
              </li>
              <li>
                <a href="" className='details-link-item'>  Tecnologies <div></div> <span></span></a>
                <div className={`${document.URL==='' ? 'here-footer': 'not-here-footer' }`}>you`re here</div>
              </li>
              <li>
                <a href="" className='details-link-item'>     blog     <div></div> <span></span></a>
                <div className={`${document.URL==='' ? 'here-footer': 'not-here-footer' }`}>you`re here</div>
              </li>
              <li>
                <a href="" className='details-link-item'>    about   <div></div> <span></span></a>
                <div className={`${document.URL==='' ? 'here-footer': 'not-here-footer' }`}>you`re here</div>
              </li>
              <li>
                <a href="" className='details-link-item'>    contact    <span></span></a>
                <div className={`${document.URL==='' ? 'here-footer': 'not-here-footer' }`}>you`re here</div>
              </li>
            </ul>
          </div>
          <div onClick={toggleMenu3} className={`details-content ${menuIsOpen3 ? 'expand-menu-follow':''}`}>
            <div className="details-title">follow 
              <svg xmlns="http://www.w3.org/2000/svg" height="60px" className={menuIsOpen3 ? 'svg-open-footer':'svg-close-footer'} viewBox="0 -960 960 960" width="60px" fill="#e8eaed">
                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
              </svg>
            </div>
            <ul >
              <li><a href="" className="details-link-item" >facebbok   <span></span></a></li>
              <li><a href="" className="details-link-item" >instagram  <span></span></a></li>
              <li><a href="" className="details-link-item" >twitter    <span></span></a></li>
              <li><a href="" className="details-link-item" >LinkedIn   <span></span></a></li>
              <li><a href="" className="details-link-item" >Git-Hub    <span></span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-policy">
        <a className="footer-policy-cookie" >Cookie Policy</a>
        <a className="footer-policy-privacy" >Privacy Policy</a>
        <p className="footer-policy-copy" > Copyright ©  Federico Guakinchay. All Rights reserver.  </p>
      </div>
      <p className="my-work"> Digital Productions </p>
    </div>
  )
  
}

const mapStateToProp=state=>({

})

export default connect(mapStateToProp, {

}) (MyFooter)