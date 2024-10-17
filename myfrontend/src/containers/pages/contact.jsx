// Third-party components
import Layout from "../../hocs/layouts/layout"

// Icons (React of  Icons)
// My components
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"



function Contact(){
  return (
    <Layout >
      <Navbar/>
      <main>
        <div className="nav-site">this is my web page</div>
        <h1>hello word</h1>
      </main>
      <Footer/>
    </Layout>
  )
}
export default Contact