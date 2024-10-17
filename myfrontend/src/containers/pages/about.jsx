// Third-party components
import Language from "../../language";
import Layout from "../../hocs/layouts/layout"
import { IconContext } from "react-icons";
// Icons (React of  Icons)
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGithub , IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
// My components
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
import Leyend from "../../components/leyend"
import SomeBlogsMy from "../../components/some_blogs";
import SomeProyects from "../../components/some_projects"


function About(){
  return (
    <Layout >
      <Navbar/>
      <main>
        <section className="main-content">
          <div className="nav-site">this is my web page</div>
          <div className="principal__title" style={{paddingTop:"0"}}>
            <h2>  <Language  value={"About-title"}/>  </h2>
            <p>   <Language  value={"About-text-1"} style={{fontSize:"1.1rem"}} />  </p> 
            <p>   <Language  value={"About-text-2"} style={{fontSize:"1.1rem"}} />  </p>  
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