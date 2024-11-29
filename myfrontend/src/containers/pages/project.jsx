// Third-party components
//import { useState } from "react";
import {TranlateComponent} from "../../components/settings/language";
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
import DisplayProjects from "../display_db/display_projects";
import SomeBlogsMy from "../display_db/display_blogs";
import Leyend from "../../components/leyend"

//  redux 
import { get_projects_categories, get_languages } from "../../redux/actions/projects_categories/projects_categories"
import { connect } from "react-redux"
import { get_projects_list , get_projects_list_page } from "../../redux/actions/projects/projects"

function Project({
  get_languages,
  languages,
  get_projects_categories,
  projects_categories,
  get_projects_list,
  get_projects_list_page,
  projects_list,
  count,
  next,
  previous,
} ){
  useEffect(() => {
    window.scrollTo(0,0)
    document.title = "Blog";
    get_projects_categories()
    get_languages()
    get_projects_list()
    }, [get_projects_categories,get_languages,get_projects_list]);
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
            <h2>  <TranlateComponent    value={"Proyects-title"}/>  </h2>
            <p>   <TranlateComponent    value={"Proyects-text"} />  </p>  
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
        <DisplayProjects categories= {projects_categories&&projects_categories} cardsContent={projects_list&&projects_list} program_lenguages={languages && languages} />
        <Leyend/>
        <SomeBlogsMy />
      </main>
      <Footer/>
    </Layout>
  )
}
const mapStateToProps = (state) => ({
  languages: state.ProjectsCategories.languages,
  projects_categories: state.ProjectsCategories.categories,
  projects_list: state.Projects.projects_list,
  count: state.Projects.count,
  next: state.Projects.next,
  previous: state.Projects.previous,
});
export default connect(mapStateToProps,{
  get_projects_categories,
  get_projects_list,
  get_projects_list_page,
  get_languages,
}) (Project)