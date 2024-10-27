// Third-party components
//import { useState } from "react";
import Language from "../../language";
import Layout from "../../hocs/layouts/layout"
import { IconContext } from "react-icons";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
// Icons (React of  Icons)
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGithub , IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
// My components
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
import SearchDB from "../../components/searchdb";
import SomeBlogsMy from "../../components/some_blogs";
import Leyend from "../../components/leyend"

function Project(){
  useEffect(() => {
    window.scrollTo(0,0)
      document.title = "Blog";
    }, []);
  return (
    <Layout >
      <Helmet>
        <title>only one | projects </title>
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
        <SearchDB/>
        <Leyend/>
        <SomeBlogsMy />
      </main>
      <Footer/>
    </Layout>
  )
}
export default Project