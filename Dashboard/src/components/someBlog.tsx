import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/display_db/some_blogs.css"
import AuthorCard from "../../components/userCard";

//redux
import { get_blog_list } from "../../redux/actions/blog/blog";
import { connect } from "react-redux"

function SomeBlogsMy({ get_blog_list, blog_list },){
  useEffect(()=>{
    get_blog_list();
  },[get_blog_list])

  const api_url = 'http://localhost:8000';
  const lang = TranslateValue('lang');
  const navigate = useNavigate()
  function goToBlog(slug) {navigate('/Blog/' + slug);}

  if (!blog_list) {
    return <div>
    <div className="loading-item" > 
      <TranlateComponent   value={"load"} />
      <div className="loading-dot-line">
        <div className="dot d1"></div>
        <div className="dot d2"></div>
        <div className="dot d3"></div>
      </div>
    </div>
  </div>; 
  }
  else{
  return(
  <>
  <section className="some-blog" style={{padding:" 0 5% 5% 5% "}}>
    <h2 style={{fontSize:"30px"}}><TranlateComponent  value={"some-blog-title"}/> </h2>
    <div className="some-blog-content">
    {blog_list.length > 0 ? (
        blog_list.slice(0, 2).map((item, index) => (
          <div key={index} className="some-blog-container">
            <div 
            className="some-blog-card " 
            tabIndex="0" 
            role="button"
            onClick={() => goToBlog(item.slug)} 
            onKeyDown={(e)=>{if(e.key === 'Enter'){() => goToBlog(item.slug)};}} >
              <div className="some-blog-img-content">
                <img
                  className='some-blog-img'
                  onDrop={(event) => event.preventDefault()}
                  onDragOver={(event) => event.preventDefault()}
                  style={{ 
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",}} 
                  src={`${api_url}${item.thumbnail}`}
                  alt={item.title}
                />
              </div>
              <div>
              <p className="some-cat" >
                {lang === 'en' ?  `${item.category.name_en}:` : `${item.category.name_es}:`}
              </p>
              </div>
              <h3 className="some-blog-title" style={{ textAlign: "center" }}>
                {lang === 'en' ? item.title_en : item.title_es}
              </h3>
              <p className="some-content" style={{ textAlign: "center" }}>
                {lang === 'en' ? item.description_en : item.description_es}
              </p>
            </div>
            <AuthorCard item={item}/>
          </div>
        ))
      ) : (
        <p> not blog available</p>
      )}
    </div>
  </section>
</>)
}
}
const mapStateToProps = state => ({
  blog_list: state.blog.blog_list,
})
export default connect(mapStateToProps,{
  get_blog_list,
}) (SomeBlogsMy)