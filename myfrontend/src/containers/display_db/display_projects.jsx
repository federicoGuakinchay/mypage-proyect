import { useState } from "react";

import { FaSearch } from "react-icons/fa";

import { TranlateComponent , TranslateValue } from "../../components/settings/language";
import ProjectsGrid from "./grid/proyects_grid";
import "../../styles/display_db/display_db.css"


function DisplayProjects({ categories = [], cardsContent = [], program_lenguages = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const  [selectedLanguages, setSelectedLanguages]  = useState([]);
  console.log('cardsContent  projects', cardsContent)
  const lang = TranslateValue('lang');
  
  if (!categories || !cardsContent) {
    return <div>
    <div className="loading-item" > 
      <TranlateComponent value={"load"} />
      <div className="loading-dot-line">
        <div className="dot d1"></div>
        <div className="dot d2"></div>
        <div className="dot d3"></div>
      </div>
    </div>
  </div>; 
  }
  else{
  
  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) => {
      return Array.isArray(prev) && prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category];
    });
  };
  const handlelanguageClick = (language) => {
    setSelectedLanguages((prev) => {
      return Array.isArray(prev) && prev.includes(language)
        ? prev.filter((item) => item !== language)
        : [...prev, language];
    });
  };
  
  const filteredCards = Array.isArray(cardsContent)
  ? cardsContent.filter((card) => {
      const matchesCategory =
        selectedCategories.length === 0 || 
        (Array.isArray(card.categories) &&
          card.categories.some((category) => selectedCategories.includes(category.slug)));
      
      let matchesSearch = false;
      if (lang === 'es') {
        matchesSearch = card.title ? card.title.toLowerCase().includes(searchTerm.toLowerCase())
        : false;
      } else {
        matchesSearch = card.title ? card.title.toLowerCase().includes(searchTerm.toLowerCase())         
        : false;
      }

      const matchesLanguage =
      selectedLanguages.length === 0 || 
      (Array.isArray(card.languages) &&
        card.languages.some((language) => selectedLanguages.includes(language.name)));
      
        return (matchesSearch || matchesCategory || matchesLanguage);
    })
  : [];
  return (
    <section className="Proyect__section">
      {/* Category Filters */}
      <h3 className="filters__title">Categories:</h3>
      <div className="filters__container">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => (
            <div
              key={index}
              tabIndex="0"
              role="button"
              onClick={() => handleCategoryClick(category.slug  )}
              onKeyDown={(e) => e.key === "Enter" && handleCategoryClick(category.slug)}
              className={`filter__item ${selectedCategories.includes(category.slug) ? "filter__selected" : ""}`}
            >
              {lang === 'en' ? category.name_en : category.name_es}
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
      <h3 className="filters__title">programming Lenguages:</h3>
      <div className="filters__container">
        {Array.isArray(program_lenguages) && program_lenguages.length > 0 ? (
          program_lenguages.map((language , index) => (
            <div
              key={index}
              tabIndex="0"
              role="button"
              onClick={() => handlelanguageClick(language.name)}
              onKeyDown={(e) => e.key === "Enter" && handlelanguageClick(language.name)}
              className={`filter__item ${selectedLanguages.includes(language.name) ? "filter__selected" : ""}`}
            >
              {language.name}
            </div>
          ))
        ) : (
          <p>No Languages available</p>
        )}
      </div>
      {/* Search Input */}
      <div className="search-projects">
        <input
          type="text"
          name="search_project"
          id="search_projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search projects..."
        />
        <button className="icon-search-project">
          <FaSearch size={25} />
        </button>
      </div>
        <ProjectsGrid objects={filteredCards} />
    </section>
  );
  }
}

export default DisplayProjects;