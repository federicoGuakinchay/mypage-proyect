import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
//<Navbar/> <Footer/>
function Home(){
  return (
    <Layout>
      <Navbar/>
      <div className="main-content">
        <h1 className="nav-site">this is my web page</h1>
        <h1>{('Welcome to my home page')}</h1>
      </div>
      <Footer/>
    </Layout>
  )
}
export default Home