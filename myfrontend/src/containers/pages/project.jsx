// Third-party components
//import { useState } from "react";
import Language from "../../language";
import Layout from "../../hocs/layouts/layout"
import { IconContext } from "react-icons";
// Icons (React of  Icons)
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGithub , IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
// My components
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
import '../../styles/projects.css'

import vash  from '../../assets/images/vash.jpg'
import juana from '../../assets/images/juana.jpg'

function Project(){

  return (
    <Layout >
      <Navbar/>
      <main>
        <section className="main-content">
          <div className="nav-site">this is my web page</div>
          <div className="principal__title">
            <h2>  <Language  value={"Proyects-title"}/>  </h2>
            <p>   <Language  value={"Proyects-text"} />  </p>  
          </div>
          <IconContext.Provider value={{ color: "blue", className: "social-media-ico", size:"2em" }}>
            <div className="social-media-conteiner">
              <div className="link-social-media" tabIndex="0" role='button' > <SiFacebook      /> </div>
              <div className="link-social-media" tabIndex="0" role='button' > <RiInstagramFill /> </div>
              <div className="link-social-media" tabIndex="0" role='button' > <IoLogoGithub    /> </div>
              <div className="link-social-media" tabIndex="0" role='button' > <FaLinkedin      /> </div>
              <div className="link-social-media" tabIndex="0" role='button' > <IoMail          /> </div>
            </div>
          </IconContext.Provider>
        </section>
        <section  className="Proyect__section"> 
          <div className="filters__container">
            <div 
              tabIndex="0" role='button'  
              onClick={(e) => e.currentTarget.classList.toggle("filter__unselect")}
              onKeyDown={(e) =>{if(e.key === 'Enter') e.currentTarget.classList.toggle("filter__unselect")}}
              className="filter__item ">item
            </div>
            <div 
              tabIndex="0" role='button'  
              onClick={(e) => e.currentTarget.classList.toggle("filter__unselect")} 
              onKeyDown={(e) =>{if(e.key === 'Enter') e.currentTarget.classList.toggle("filter__unselect")}}
              className="filter__item ">item
            </div>
            <div 
              tabIndex="0" role='button' 
              onClick={(e) => e.currentTarget.classList.toggle("filter__unselect")} 
              onKeyDown={(e) =>{if(e.key === 'Enter') e.currentTarget.classList.toggle("filter__unselect")}}
              className="filter__item">item
            </div>
            <div 
              tabIndex="0" role='button'  
              onClick={(e) => e.currentTarget.classList.toggle("filter__unselect")} 
              onKeyDown={(e) =>{if(e.key === 'Enter') e.currentTarget.classList.toggle("filter__unselect")}}
              className="filter__item">item
            </div>
            <div 
              tabIndex="0" role='button'  
              onClick={(e) => e.currentTarget.classList.toggle("filter__unselect")} 
              onKeyDown={(e) =>{if(e.key === 'Enter') e.currentTarget.classList.toggle("filter__unselect")}}
              className="filter__item">item
            </div>
          </div>
          <div className="search-projects">
            <input type="text" name="search_proyect" id="search_projects" />
            <button className="icon-search-proyect"><FaSearch size={25}/></button>
          </div>

          <div className="projects-grid">
            <div  className="projects-grid-item">
              <div className="projects-img-content">
                <div className="projects-img"
                  style={{ 
                  background: `url(${vash})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",}}>
                </div>
              </div>
              <h3 className="projects-grid-title" style={{textAlign:"center"}}>some-blog-titles-2</h3>
            </div>

            <div className="projects-grid-item">
              <div className="projects-img-content">
                <div className="projects-img"
                  style={{ 
                  background: `url(${juana})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",}}>
                </div>
              </div>
              <h3 className="some-blog-title" style={{textAlign:"center"}}>some-blog-titles-2</h3>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </Layout>
  )
}
export default Project