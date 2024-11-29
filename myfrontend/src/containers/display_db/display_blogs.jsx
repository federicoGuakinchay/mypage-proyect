import { useState } from "react";

import { FaSearch } from "react-icons/fa";

import "../../styles/display_db/display_db.css"
import { TranlateComponent , TranslateValue } from "../../components/settings/language";
import Grid from "./grid/blog_grid";



function DisplayBlogs({ categories = [], cardsContent = [], type = null }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  console.log('cardsContent', cardsContent)
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
  const handleAllCategoriesClick = (category) => {
    handleCategoryClick(category.slug);
    const processSubcategories = (subcategories) => {
      if (Array.isArray(subcategories) && subcategories.length > 0) {
        subcategories.forEach((subCategory) => {
          handleAllCategoriesClick(subCategory);
        });
      }
    };
  
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
        <Grid objects={filteredCards} go='Blog' />
    </section>
  );
  }
}

export default DisplayBlogs;
