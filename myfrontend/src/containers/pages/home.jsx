import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navegation/navbar"
import Footer from "../../components/navegation/myFooter"
import '../../styles/home.css'
import Typewriter from "../../components/type_writer"
import { SiFacebook } from "react-icons/si";

function Home(){
  const text = [
    '  Another one Developer',
    '  Another one Page',
    '  Another one Project',
    '  Another one portfolio',
    '  Another one Code Artist'
  ]
  return (
    <Layout >
      <Navbar/>
      <div className="main-content">
        <div className="nav-site">this is my web page</div>
        <div>
          <h2 className="type-writer">
            <Typewriter text={text}/> 
          </h2>
          <ul className="container-services">
            <li><a href="" >   Webs            <span></span></a></li>
            <li><a href="" >   Apps           <span></span></a></li>
            <li><a href="" >   Video Games    <span></span></a></li>
            <li><a href="" >   Marketing      <span></span></a></li>
            <li><a href="" >   Services       <span></span></a></li>
          </ul>
        </div>
      <div><SiFacebook/></div>
      </div>
      <Footer/>
    </Layout>
  )
}
export default Home