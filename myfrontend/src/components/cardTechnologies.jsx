
import {TranlateComponent  } from './settings/language';

function CardTechnologies({ name, languageKey, icons , title = null}) {
  return (
    <div className="techonologie-content">
      <div className="techonologie-title-content">
        <h3 className="technologie-title">{name}</h3>
        {icons.length > 0 && icons.map((Icon, idx) => <Icon key={idx} size={30} />)}
      </div>
      <p className="technologie-description">
        <TranlateComponent   value={languageKey} />
      </p>
    </div>
  );
}

export default CardTechnologies;