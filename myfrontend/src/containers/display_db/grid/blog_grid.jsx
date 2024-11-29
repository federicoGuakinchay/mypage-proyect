import { useNavigate } from "react-router-dom";

import AuthorCard from "../../../components/author_card";
import {TranslateValue} from "../../../components/settings/language";
import dateFormat from "../../../components/settings/time";

function BlogGrid ({objects,go}){
  const api_url = import.meta.env.VITE_API_URL ; 
  const lang = TranslateValue('lang');
  const navigate = useNavigate();
  function goToBlog(slug) { navigate(`/${go}/${slug}`);}
  return(
<div className="projects-grid">
  {objects.length > 0 ? (
    objects.map((item, index) => (
      <div key={index}>
        <div
          className="projects-grid-item"
          tabIndex="0"
          role="button"
          onClick={() => goToBlog(item.slug)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') goToBlog(item.slug);
          }}
        >
          <div className="projects-img-content">
            <img
              onDrop={(event) => event.preventDefault()}
              onDragOver={(event) => event.preventDefault()}
              src={`${api_url}${item.thumbnail}`}
              alt={item.title}
              className="img-card"
            />
          </div>
          <div>
            <p className="projects-grid-date">
              {lang === 'en'
                ? `${dateFormat(item.published, 'en-US', 'ago')}`
                : `${dateFormat(item.published, 'es-ARG', 'ago')}`}
            </p>
            <p className="projects-grid-category">
              {lang === 'en' ? `${item.category.name_en}:` : `${item.category.name_es}:`}
            </p>
          </div>
          <h3 className="projects-grid-title" style={{ textAlign: 'center' }}>
            {lang === 'en' ? item.title_en : item.title_es}
          </h3>
          <p className="projects-grid-content" style={{ textAlign: 'center' }}>
            {lang === 'en' ? item.description_en : item.description_es}
          </p>
        </div>
        <AuthorCard item={item} />
      </div>
    ))): (
      <p>No projects found</p>
    )}
</div>
);}
export default BlogGrid