// Third-party components
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
import Reasons from "../../components/reasons"
import SomeProyects from "../../components/some_projects"
import Leyend from "../../components/leyend"
import Typewriter from "../../components/type_writer"
import SomeBlogsMy from "../../components/some_blogs";
import '../../styles/home.css'


function Home(){
  // text for the type writer
  const text = [
    '  Another one Developer',
    '  Another one Page',
    '  Another one Project',
    '  Another one portfolio',
    '  Another one Code Artist'
  ]
  useEffect(() => {
    window.scrollTo(0,0)
      document.title = "Blog";
    }, []);
  return (
    <Layout >
      <Navbar/>
      <main>
        <section className="main-content">
          <div className="nav-site">this is my web page</div>
          <div>
            <h2 className="type-writer">
              <Typewriter text={text}/> 
            </h2>
            <ul className="container-services">
              <li><div tabIndex="0" role='button' style={{cursor:"pointer"}}>      Webs         <span></span></div></li>
              <li><div tabIndex="0" role='button' style={{cursor:"pointer"}}>     Games         <span></span></div></li>
              <li><div tabIndex="0" role='button' style={{cursor:"pointer"}}>      Apps         <span></span></div></li>
              <li><div tabIndex="0" role='button' style={{cursor:"pointer"}}>   Components      <span></span></div></li>
              <li><div tabIndex="0" role='button' style={{cursor:"pointer"}}>   Algorithms      <span></span></div></li>
            </ul>
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
        <Reasons/>
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
export default Home