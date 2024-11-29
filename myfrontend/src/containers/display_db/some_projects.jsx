import { useState, useEffect } from "react"
import { TranlateComponent   , TranslateValue } from "../../components/settings/language";

import  defaul_img from "../../assets/images/default.jpg"
import "../../styles/display_db/some_projects.css"
import { useNavigate } from "react-router-dom"

import { connect } from "react-redux"
import {get_projects_list}  from '../../redux/actions/projects/projects'

function SomeProyects ({get_projects_list, projects_list}){

  useEffect(()=>{
    get_projects_list()
    console.log('projects_list', projects_list)
  },[get_projects_list])

  const navigate = useNavigate()
  const [site, setSites] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const api_url = 'http://localhost:8000';
  
  function goToProject(slug) {navigate('/Projects/' + slug);}

  useEffect(() => {
    // Set `site` values based on screen width
    const updateSites = ()=>{
      if (document.body.clientWidth > 700) {
        setSites(['0', '-50%', '-100%', '-150%', '-200%', '-250%', '-300%', '-350%', '-400%']);
      } else {
        setSites(['0', '-100%', '-200%', '-300%', '-400%', '-500%', '-600%', '-700%', '-800%', '-900%']);
      }
    }

    updateSites();

    // Add event listener for screen resizing
    window.addEventListener("resize", updateSites);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSites);
    };
  }, []);

  if (!projects_list) {
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

  const nextProy = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % site.length);
  };

  const prevProy = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + site.length) % site.length);
  };

  const getFirstTenElements = (array) => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      if (i < array.length) {
        result.push(
          <div 
          key={i} 
          className={`some-proyects__card proy${i}`}
          tabIndex="0" 
          role="button"
          onClick={() => goToProject(array[i].title)} 
          onKeyDown={(e)=>{if(e.key === 'Enter'){() => goToProject(array[i].title)};}}>
            <div className='some-proyects__card__img__content'> 
            <div alt={array[i].title} className="some-proyects__card__img" 
              style={{ 
                backgroundImage: `url(${api_url}${array[i].thumbnail})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}> </div></div>
            <h3 className="some-proyects__card__title">{array[i].title}</h3>
            <div className="some-proyects__card__categories__container">
              {array[i].categories .length > 0 ? (
                  array[i].categories.map((item, index) => (
                    <h4 key={index} className="some-proyects__card__categories">{item.name_es}</h4>
                  ))):<></>}
            </div>
          </div>
        );
      } else {
        result.push(
          <div key={i} className={`some-proyects__card proy${i}`}
            tabIndex="0" 
            role="button">
            <div className='some-proyects__card__img__content'> 
              <div alt='empty' className="some-proyects__card__img" 
              style={{ 
                backgroundImage: `url(${defaul_img})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}> </div>
            </div>
            <h3 className="some-proyects__card__title"> empty  </h3>
            <h3 className="some-proyects__card__title"> i be work in more projects </h3>
          </div>
        );
      }
    }
    return result;
  };
  

  //------------------------------------------------------------------------------


  return(
    <section className="some-proyects">
      <h2 className="some-proyects__title">
        <TranlateComponent   value={"some-proyects"}/>
      </h2>
      <button type="button" onClick={prevProy} className="carousel__button" >
        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#e8eaed"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>

      </button>
      <button type="button" onClick={nextProy} className="carousel__button carousel__button__right" >
        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#e8eaed"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
      </button>
      <div className="some-proyects__carousel">
        <div className="some-proyects__container" style={{ left: site[currentIndex] || '0' }}>
        {console.log('projects_list',projects_list)}
          {getFirstTenElements(projects_list) }          
        </div>
      </div>
    </section>
  )
}}
const mapStateToProps = state => ({
  projects_list: state.Projects.projects_list,
})
export default connect(mapStateToProps,{
  get_projects_list,
}) (SomeProyects)