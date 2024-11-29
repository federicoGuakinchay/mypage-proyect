import { useState } from "react";
import { connect } from "react-redux"
import AppIcon from "./menu/icons/app_icon";
import '../../styles//navegation/footer.css'
import { TranlateComponent } from "../settings/language.jsx";

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
  const here  = <TranlateComponent   value="here-footer" />;
  const nay =<TranlateComponent   value={"NAY"}/>
  return (
    <div className="footer-container">
      <div className="endleyend">
        <h3 ><TranlateComponent   value={"pre-footer-text-1"}/></h3>
        <h3 ><a href=""><TranlateComponent   value={"pre-footer-text-2"}/></a></h3>
      </div>
      <div className="footer">
        <div className="footer-details-content">
          <div className="footer-app-icon-content">
            <AppIcon/>
          </div>
          <div className="page-details">
            <div onClick={toggleMenu1} className={`details-content ${menuIsOpen1 ? 'expand-menu-contact':''}`}>

              <div className="details-title"><TranlateComponent   value={"link-contact"}/> 
                <div className="svg-deployment-menu">
                  <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px"       fill="#e8eaed" className={menuIsOpen1 ? 'svg-open-footer':'svg-close-footer'}>
                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                  </svg>
                </div>
              </div>

              <ul>
                <li>Mendoza Argentina</li>
                <li>Godoy Cruz</li>
                <li className="sub-titlie-contact"><TranlateComponent   value={"site"}/> </li>
                <li>{nay}</li>
                <li className="sub-titlie-contact">mail</li>
                <li>
                  <a href="" className="details-link-item" >{nay} <span></span></a>
                </li>
                <li className="sub-titlie-contact"><TranlateComponent   value={"phone"}/> </li>
                <li>{nay}</li>
              </ul>
            </div>

            <div onClick={toggleMenu2} className={`details-content ${menuIsOpen2 ? 'expand-menu-this-page':''}`}>
              <div className="details-title"><TranlateComponent   value={"this"}/>
                <svg xmlns="http://www.w3.org/2000/svg"  height="60px" viewBox="0 -960 960 960" width="60px" fill="#e8eaed" className={menuIsOpen2 ? 'svg-open-footer':'svg-close-footer'}>
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                </svg>
              </div>

              <ul>
                <li>
                  <div tabIndex="0" role='button' className='details-link-item'>   <TranlateComponent   value={"link-home"}/>   <div></div> <span></span></div>
                  <div className={`${document.URL==='http://localhost:5173/' ? 'here-footer': 'not-here-footer' }`}>{here}</div>
                </li>
                <li>
                  <div  tabIndex="0" role='button' className='details-link-item'>   <TranlateComponent   value={"link-proyects"}/>   <div></div> <span></span></div>
                  <div className={`${document.URL==='' ? 'here-footer': 'not-here-footer' }`}>{here}</div>
                </li>
                <li>
                  <div tabIndex="0" role='button' className='details-link-item'>  <TranlateComponent   value={"link-tecnologies"}/> <div></div> <span></span></div>
                  <div className={`${document.URL==='' ? 'here-footer': 'not-here-footer' }`}>{here}</div>
                </li>
                <li>
                  <div tabIndex="0" role='button' className='details-link-item'>     blog     <div></div> <span></span></div>
                  <div className={`${document.URL==='' ? 'here-footer': 'not-here-footer' }`}>{here}</div>
                </li>
                <li>
                  <div tabIndex="0" role='button' className='details-link-item'>    <TranlateComponent   value={"link-about"}/>   <div></div> <span></span></div>
                  <div className={`${document.URL==='' ? 'here-footer': 'not-here-footer' }`}>{here}</div>
                </li>
                <li>
                  <div tabIndex="0" role='button' className='details-link-item'>    <TranlateComponent   value={"link-contact"}/>   <span></span></div>
                  <div className={`${document.URL==='' ? 'here-footer': 'not-here-footer' }`}>{here}</div>
                </li>
              </ul>
            </div>
            <div onClick={toggleMenu3} className={`details-content ${menuIsOpen3 ? 'expand-menu-follow':''}`}>
              <div className="details-title"><TranlateComponent   value={"follow"}/>
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" className={menuIsOpen3 ? 'svg-open-footer':'svg-close-footer'} viewBox="0 -960 960 960" width="60px" fill="#e8eaed">
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                </svg>
              </div>
              <ul >
                <li><div tabIndex="0" role='button' className="details-link-item" >facebbok   <span></span></div></li>
                <li><div tabIndex="0" role='button' className="details-link-item" >instagram  <span></span></div></li>
                <li><div tabIndex="0" role='button' className="details-link-item" >twitter    <span></span></div></li>
                <li><div tabIndex="0" role='button' className="details-link-item" >LinkedIn   <span></span></div></li>
                <li><div tabIndex="0" role='button' className="details-link-item" >Git-Hub    <span></span></div></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-policy">
          <div className="footer-policy-cookie"  tabIndex="0" role='button'> <TranlateComponent   value={"link-cookie"}/> </div>
          <div className="footer-policy-privacy" tabIndex="0" role='button'> <TranlateComponent   value={"link-privacy"}/></div>
          <p className="footer-policy-copy" > Copyright ©  Federico Guakinchay. All Rights reserver.  </p>
        </div>
        <p className="my-work"> Digital Productions </p>
      </div>
    </div>
  )
  
}

const mapStateToProp=state=>({

})

export default connect(mapStateToProp, {

}) (MyFooter)