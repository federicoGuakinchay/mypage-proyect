import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/components/searchdb.css";
import LangFunc from "../lang_func";
import dateFormat from "../time";


function SearchDB({ categories = [], cardsContent = [], type = null }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const api_url = 'http://localhost:8000';

  const lang = LangFunc('lang');

  if (!categories || !cardsContent) {
    return <div>Loading...</div>; 
  }
  else{
  
  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) => {
      // Ensure prev is an array (for additional safety)
      return Array.isArray(prev) && prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category];
    });
  };
  const handleAllCategoriesClick = (category) => {
    // Add the main category
    handleCategoryClick(category.slug);
  
    // Recursively handle subcategories
    const processSubcategories = (subcategories) => {
      if (Array.isArray(subcategories) && subcategories.length > 0) {
        subcategories.forEach((subCategory) => {
          // Add the subcategory
          handleAllCategoriesClick(subCategory);
        });
      }
    };
  
    // Start processing subcategories, if any
    if (category && category.sub_category) {
      processSubcategories(category.sub_category);
    }
  };

  const filteredCards = Array.isArray(cardsContent) ? cardsContent.filter((card) => {
    const matchesCategory =
      selectedCategories.length === 0 || 
      (card.category && selectedCategories.includes(card.category.slug));
    
    let matchesSearch = false
    if (lang == 'es'){
      matchesSearch = card.category && card.category.name_es && typeof card.category.name_es === 'string'
      ? card.title_es.toLowerCase().includes(searchTerm.toLowerCase()) || card.description_es.toLowerCase().includes(searchTerm.toLowerCase())
      : false;
    }else{
      matchesSearch = card.category && card.category.name_en && typeof card.category.name_en === 'string'
      ? card.title_en.toLowerCase().includes(searchTerm.toLowerCase())|| card.description_en.toLowerCase().includes(searchTerm.toLowerCase())
      : false;
    }

    return matchesCategory && matchesSearch;
  }) : [];

  return (
    <section className="Proyect__section">
      {/* Category Filters */}
      <div className="filters__container">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => (
            <div
              key={index}
              tabIndex="0"
              role="button"
              onClick={() => handleAllCategoriesClick(category)}
              onKeyDown={(e) => e.key === "Enter" && handleAllCategoriesClick(category)}
              className={`filter__item ${selectedCategories.includes(category.slug) ? "filter__selected" : ""}`}
            >
              {lang === 'en' ? category.name_en : category.name_es}
            </div>
          ))
        ) : (
          <p>No categories available</p>
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

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredCards.length > 0 ? (
          filteredCards.map((item, index) => (
            <a key={index} className="projects-grid-item" tabIndex="0" role="button">
              <div className="projects-img-content">
                <img
                  onDrop={(event) => event.preventDefault()}
                  onDragOver={(event) => event.preventDefault()}
                  src={`${api_url}${item.thumbnail}`}
                  alt={item.title}
                  className='img-card'
                />
              </div>
              <div>
              <p className="projects-grid-cat" >
                {lang === 'en' ?  `${item.category.name_en}:` : `${item.category.name_es}:`}
              </p>
              <p className="projects-grid-cat">
                {lang === 'en' ?  `${dateFormat(item.published ,'en-US' ,'ago')}` : `${dateFormat(item.published ,'es-ARG' ,'ago')}`}
              </p>
              </div>
              <h3 className="projects-grid-title" style={{ textAlign: "center" }}>
                {lang === 'en' ? item.title_en : item.title_es}
              </h3>
              <p className="projects-grid-content" style={{ textAlign: "center" }}>
                {lang === 'en' ? item.description_en : item.description_es}
              </p>
            </a>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </div>
    </section>
  );
  }
}

export default SearchDB;
