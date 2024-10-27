import React, { useState } from "react";
import vash from "../assets/images/vash.jpg";
import juana from "../assets/images/juana.jpg";
import amy from "../assets/images/amy.jpg";
import Over from "../assets/images/Over.jpg";
import hollow from "../assets/images/am7dExX_460s.jpg";
import { FaSearch } from "react-icons/fa";
import "../styles/components/searchdb.css";

function SearchDB({ categories=[], cardsContent = [], type = null }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const request = [
    { name: "vash", img: vash, category: "software" },
    { name: "juana", img: juana, category: "Category2" },
    { name: "amy", img: amy, category: "Category1" },
    { name: "Over", img: Over, category: "Category3" },
    { name: "hollow", img: hollow, category: "Category2" },
  ];

  // Handle category selection
  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filter projects by search term and selected categories
  const filteredProjects = request.filter((project) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(project.category);

    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="Proyect__section">
      {/* Category Filters */}
      <div className="filters__container">
        {categories && categories.length > 0 ? (
          categories.map((category, index) => (
            <div
              key={index}
              tabIndex="0"
              role="button"
              onClick={() => handleCategoryClick(category.name)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCategoryClick(category.name);
              }}
              className={`filter__item ${
                selectedCategories.includes(category.name) ? "filter__selected" : ""
              }`}
            >
              {category.name}
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
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item, index) => (
            <a
              className="projects-grid-item"
              key={index}
              tabIndex="0"
              role="button"
            >
              <div className="projects-img-content">
                <div
                  className="projects-img"
                  style={{
                    background: `url(${item.img})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "200px", // adjust this as necessary
                  }}
                ></div>
              </div>
              <h3 className="projects-grid-title" style={{ textAlign: "center" }}>
                {item.name}
              </h3>
            </a>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </div>
    </section>
  );
}

export default SearchDB;
