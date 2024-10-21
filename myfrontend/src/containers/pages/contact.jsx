// Third-party components
import Layout from "../../hocs/layouts/layout"

// Icons (React of  Icons)
// My components
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
import ContactComp from "../../components/contact"
import ContactForm from "../../components/forms/contacform"
import '../../styles/contact.css'


function Contact(){
  return (
    <Layout >
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