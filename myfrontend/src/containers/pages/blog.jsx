// Third-party components
import Layout from "../../hocs/layouts/layout"
//import { IconContext } from "react-icons";
//// Icons (React of  Icons)
//import { SiFacebook } from "react-icons/si";
//import { RiInstagramFill } from "react-icons/ri";
//import { IoLogoGithub , IoMail } from "react-icons/io5";
//import { FaLinkedin } from "react-icons/fa6";
// My components
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
import SomeProyects from "../../components/some_projects"
import Leyend from "../../components/leyend"
import SomeBlogsMy from "../../components/some_blogs";


function Blog(){
  return (
    <Layout >
      <Navbar/>
      <main>
        <section className="main-content-blog">
          <div className="nav-site">this is my web page</div>
          <div ><h2> Blog </h2></div>
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
export default Blog