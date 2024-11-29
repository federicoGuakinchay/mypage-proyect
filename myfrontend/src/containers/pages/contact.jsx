// Third-party components
import Layout from "../../hocs/layouts/layout"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react"
// Icons (React of  Icons)
// My components
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
import ContactComp from "../../components/contact"
import ContactForm from "../../components/forms/contacform"
import '../../styles/pages/contact.css'


function Contact(){
  useEffect(() => {
    window.scrollTo(0,0)
      document.title = "Blog";
    }, []);
  return (
    <Layout >
        <Helmet>
          <title>only one | Contact </title>
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
        <div className="nav-site">this is my web page</div>
        <div className="container">
          <ContactForm/>
          <ContactComp/>
        </div>
      </main>
      <Footer/>
    </Layout>
  )
}
export default Contact