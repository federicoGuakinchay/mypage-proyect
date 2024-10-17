import Language from "../language"
import "./some_blogs.css"
import juana from '../assets/images/juana.jpg'
import Over from '../assets/images/Over.jpg'

function SomeBlogsMy(){
  
  return(
  <>
  <section className="some-blog" style={{padding:" 0 5% 5% 5% "}}>
    <h2 style={{fontSize:"30px"}}><Language value={"some-blog-title"}/> </h2>
    <div className="some-blog-content">
      <a href="" className="some-blog-card ">
        <div className="some-blog-img-content">
          <div className="some-blog-img" 
          style={{ 
            background: `url(${juana})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",}}></div>
        </div>
        <h3 className="some-blog-title" style={{textAlign:"center"}}>some-blog-titles-1</h3>
      </a>
      <a href="" className="some-blog-card"
      style={{display:"flex",flexDirection:"column",width:"-webkit-fill-available",}}>

        <div className="some-blog-img-content">
          <div className="some-blog-img"
          style={{ 
            background: `url(${Over})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",}}></div>
        </div>
        <h3 className="some-blog-title" style={{textAlign:"center"}}>some-blog-titles-2</h3>
      </a>
    </div>
  </section>
</>)
}

export default SomeBlogsMy;