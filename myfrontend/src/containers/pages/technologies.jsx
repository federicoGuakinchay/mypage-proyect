// Third-party components
import Language from "../../language";
import Layout from "../../hocs/layouts/layout"
import { IconContext } from "react-icons";
// Icons (React of  Icons)
import { SiFacebook , SiArduino , SiDjango , SiVite , SiSqlite } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGithub , IoMail ,IoLogoNodejs } from "react-icons/io5";
import { FaLinkedin , FaSquareJs , FaRust ,FaReact , FaGitAlt } from "react-icons/fa6";
import { FaPython , FaGithub , FaHtml5 , FaCss3 } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
// My components
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
import Leyend from "../../components/leyend"
import SomeBlogsMy from "../../components/some_blogs";
import SomeProyects from "../../components/some_projects"
import '../../styles/technologies.css'

function Technologies(){
  return (
    <Layout >
      <Navbar/>
      <main>
        <section className="main-content">
          <div className="nav-site">this is my web page</div>
          <div className="principal__title">
            <h2>  <Language  value={"Technologies-title"}/>  </h2>
            <p>   <Language  value={"Technologies-text"} />  </p>  
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
        <section className="technologies-section">
          <h2>Programming Lenguages </h2>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Python</h3>
              <FaPython size={30} />
            </div>
            <p className="technologie-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eum corporis aspernatur distinctio facere, culpa velit consequatur unde a, quas inventore iure itaque obcaecati! Dignissimos beatae vero in nulla rem!</p>
          </div>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Java Script</h3>
              <FaSquareJs   size={30} />
              <IoLogoNodejs size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Arduino uno</h3>
              <SiArduino size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Assembler</h3>
              <SiArduino size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Python</h3>
              <FaRust size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
          <h2>Frame works </h2>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Django</h3>
              <SiDjango size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Django</h3>
              <FaReact size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
          <h2> Data bases </h2>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Data Bases SQL</h3>
              <SiSqlite  size={30}/>
              <BiLogoPostgresql size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
          <h2> Other technologies: </h2>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Html5</h3>
              <FaHtml5 size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">css</h3>
              <FaCss3 size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Vite</h3>
              <SiVite size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
          <div className="techonologie-content">
            <div className="techonologie-title-content">
              <h3 className="technologie-title">Git</h3>
              <FaGithub size={30}/>
              <FaGitAlt size={30}/>
            </div>
            <p className="technologie-description"></p>
          </div>
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
export default Technologies