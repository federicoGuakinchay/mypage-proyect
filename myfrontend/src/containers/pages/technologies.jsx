// Third-party components
import Language from "../../language";
import Layout from "../../hocs/layouts/layout"
import { IconContext } from "react-icons";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
// Icons (React of  Icons)
import { SiFacebook , SiArduino , SiDjango , SiVite , SiSqlite , SiOctave } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGithub , IoMail ,IoLogoNodejs } from "react-icons/io5";
import { FaLinkedin , FaSquareJs , FaRust ,FaReact , FaGitAlt } from "react-icons/fa6";
import { FaPython , FaGithub , FaHtml5 , FaCss3 } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscDebugConsole } from "react-icons/vsc"
// My components
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
import Leyend from "../../components/leyend"
import SomeBlogsMy from "../../components/some_blogs";
import SomeProyects from "../../components/some_projects"
import '../../styles/technologies.css'
import CardTechnologies from "../../components/cardTechnologies";

function Technologies(){
  useEffect(() => {
    window.scrollTo(0,0)
      document.title = "Blog";
    }, []);
  const technologiesList = [
    { name: "Python", icons: [FaPython], languageKey: "python" },
    { name: "JavaScript", icons: [IoLogoNodejs, FaSquareJs], languageKey: "js" },
    { name: "Rust", icons: [FaRust], languageKey: "rust" },
    { name: "Octave", icons: [SiOctave], languageKey: "octave" },
    { name: "Arduino", icons: [SiArduino], languageKey: "arduino" },
    { name: "Assembler", icons: [VscDebugConsole], languageKey: "assembler" },
    { name: "Django", icons: [SiDjango], languageKey: "django" },
    { name: "React", icons: [FaReact], languageKey: "react" },
    { name: "SQL", icons: [SiSqlite, BiLogoPostgresql], languageKey: "sql" },
    { name: "HTML", icons: [FaHtml5], languageKey: "html" },
    { name: "CSS", icons: [FaCss3], languageKey: "css" },
    { name: "Vite", icons: [SiVite], languageKey: "vite" },
    { name: "Git", icons: [FaGitAlt, FaGithub], languageKey: "git" }
  ];

  return (
    <Layout >
      <Helmet>
        <title>only one | Tecnhologies </title>
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
          <h2><Language value={"Language"} /> </h2>
          {technologiesList.map((tech, idx) => (
            <>
            { (tech.name === "Django") && <h2>Framework</h2> }
            { (tech.name === "SQL") && <h2>Databases</h2> }
            { (tech.name === "HTML") && <h2>Others</h2> }
            <CardTechnologies
              key={idx} // Ensure each component has a unique key for React
              name={tech.name}
              languageKey={tech.languageKey}
              icons={tech.icons}
            />
            </>
          ))}
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