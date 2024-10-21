import vash  from '../assets/images/vash.jpg'
import juana from '../assets/images/juana.jpg'
import amy from '../assets/images/amy.jpg'
import Over from '../assets/images/Over.jpg'
import hollow from  '../assets/images/am7dExX_460s.jpg'
import { FaSearch } from "react-icons/fa";
import '../styles/components/searchdb.css'

function SearchDB({type=null}) {
  const items = ["test_item","test_item","test_item","test_item","test_item",]
  const request = [
    {name:"vash" , img:vash },
    {name:"juana", img:juana},
    {name:"amy", img:amy },
    {name:"Over",img:Over },
    {name:"hollow", img:hollow}
  ]

  return (
    <section className='Proyect__section'>
      <div className="filters__container">
        {items.map((item, index) => (
          <div
            key={index} 
            tabIndex="0"
            role="button"
            onClick={(e) => e.currentTarget.classList.toggle("filter__unselect")}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.currentTarget.classList.toggle("filter__unselect");
            }}
            className="filter__item"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="search-projects">
        <input type="text" name="search_proyect" id="search_projects" />
        <button className="icon-search-proyect"><FaSearch size={25}/></button>
      </div>
      <div className="projects-grid">
      {request.map((item, index) => (
          <a 
            className="projects-grid-item" 
            key={index}
            tabIndex="0"
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter") e.currentTarget.classList.toggle("filter__unselect");
            }}>
            <div className="projects-img-content">
              <div className="projects-img"
                style={{
                  background: `url(${item.img})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "200px" // adjust this as necessary
                }}>
              </div>
            </div>
            <h3 className="projects-grid-title" style={{ textAlign: "center" }}>
              {item.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default SearchDB;