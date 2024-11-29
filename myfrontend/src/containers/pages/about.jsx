// Third-party components
import { Helmet } from "react-helmet-async";
import {TranlateComponent } from "../../components/settings/language";
import Layout from "../../hocs/layouts/layout"
import { IconContext } from "react-icons";
import { useEffect } from "react";
// Icons (React of  Icons)
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGithub , IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
// My components
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
import Leyend from "../../components/leyend"
import SomeBlogsMy from "../display_db/some_blogs";
import SomeProyects from "../display_db/some_projects"

function About(){
  useEffect(() => {
    window.scrollTo(0,0)
      document.title = "Blog";
    }, []);
  return (
    <Layout >
      <Helmet>
        <title>only one | About Me </title>
        <meta name='description' content='Agency of software. service of creations of web pages'/>
        <meta name="keywords" content="desarrollador de software, software development, create my own web page , crear my propia pagina web" />
        <meta name='robots' content='all' />
        <meta name='author' content='Federico Guainchay' />
        <meta name='publisher' content='Federico Guakinchay'/>

        <meta property='Og:title'  content='only one | sofware Development'  />
        <meta property='Og:description' content='Agency of software. service of creations of web pages' />
        <meta property='Og:url' />
        <meta property='Og:img' />

        <meta name='twitter:title'content='only one | sofware Development' />
        <meta name='twitter:description' content='Agency of software. service of creations of web pages'/>
        <meta name='twitter:url' />
        <meta name='twitter:img' />

        <link rel="canonical" href="" />
    </Helmet>
      <Navbar/>
      <main>
        <section className="main-content">
          <div className="nav-site">this is my web page</div>
          <div className="principal__title" style={{paddingTop:"0"}}>
            <h2>  <TranlateComponent    value={"About-title"}/>  </h2>
            <p>   <TranlateComponent    value={"About-text-1"} style={{fontSize:"1.1rem"}} />  </p> 
            <p>   <TranlateComponent    value={"About-text-2"} style={{fontSize:"1.1rem"}} />  </p>  
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
        <SomeProyects/>
        <Leyend/>
        <section className="experience">   </section>  {/* For now i don't have any for now */}
        <section className="clients">      </section>  {/* For now i don't have any for now */}
        <section className="Archivements"> </section>  {/* For now i don't have any for now */}
        <SomeBlogsMy />
      </main>
      <Footer/>
    </Layout>
  )
}
export default About