import { useNavigate } from "react-router-dom";

import {TranslateValue} from "../../../components/settings/language";
import dateFormat from "../../../components/settings/time";

function ProjectsGrid ({objects}){
  const api_url = import.meta.env.VITE_API_URL ; 
  const lang = TranslateValue('lang');
  const navigate = useNavigate();
  function goToBlog(slug) { navigate(`/Projects/${slug}`); 
  }
  return(
<div className="projects-grid">
  {objects.length > 0 ? (
    objects.map((item, index) => (
      <div key={index}>
        <div
          className="projects-grid-item"
          tabIndex="0"
          role="button"
          onClick={() => goToBlog(item.title)}
          onKeyDown={(e) => { if (e.key === 'Enter') goToBlog(item.title); }}
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
            <p className="projects-grid-categories">
              {item.categories.map((subitem, index) => (
                <span key={index}>{subitem.name_es}</span>
              ))}
            </p>
          </div>
          <h3 className="projects-grid-title" style={{ textAlign: 'center' }}>
            {item.title}
          </h3>
        </div>
      </div>
    ))): (
      <p>No projects found</p>
    )}
</div>
);}
export default ProjectsGrid