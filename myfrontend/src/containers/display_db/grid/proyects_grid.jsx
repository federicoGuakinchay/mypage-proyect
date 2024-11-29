import { useNavigate } from "react-router-dom";

import {TranslateValue} from "../../../components/settings/language";
import dateFormat from "../../../components/settings/time";

function ProjectsGrid ({objects}){
  const api_url = import.meta.env.VITE_API_URL ; 
  const lang = TranslateValue('lang');
  const navigate = useNavigate();
  function goToProject(item) {
    if ( item.content ){ navigate(`/projects/${item.title}`) }
    else navigate(item.title);
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
          onClick={() => goToProject(item)}
          onKeyDown={(e) => { if (e.key === 'Enter') goToProject(item); }}
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
                <span key={index}>{(lang==='en')?subitem.name_en:subitem.name_es}</span>
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