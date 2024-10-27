// Third-party components
import { Helmet } from "react-helmet-async"
import Layout from "../../hocs/layouts/layout"
import { useEffect } from "react"
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
import SearchDB from "../../components/searchdb"

//  redux 
import { get_categories } from "../../redux/actions/blog_categories/blogcategories"
import { connect } from "react-redux"
import { get_blog_list } from "../../redux/actions/blog/blog"
import { get_blog_list_page } from "../../redux/actions/blog/blog"


function Blog({
  get_categories,
  categories,
  get_blog_list,
  get_blog_list_page,
  blog_list,
  count,
  next,
  previous,
}){
  useEffect(() => {
    window.scrollTo(0,0)
    get_categories()
    get_blog_list()
    }, [get_categories, get_blog_list])

  return (
    <Layout >
        <Helmet>
          <title>only one | blog  </title>
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
        <section className="main-content-blog">
          <div className="nav-site">this is my web page</div>
          <div ><h2 className="bog_title"
                    style={{fontSize:"3rem", textAlign:"center"
                    }}>My Blog </h2></div>
          <SearchDB categories={categories&&categories} />
        </section>
        <Leyend/>
        <SomeProyects/>
        <section className="experience">   </section>  {/* For now i don't have any for now */}
        <section className="clients">      </section>  {/* For now i don't have any for now */}
        <section className="Archivements"> </section>  {/* For now i don't have any for now */}
      </main>
      <Footer/>
    </Layout>
  )
}
const mapStateToProps = state => ({
  categories: state.blog_categories.categories,
  blog_list: state.blog.blog_list,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
})
export default connect(mapStateToProps,{
  get_categories,
  get_blog_list,
  get_blog_list_page,
}) (Blog)