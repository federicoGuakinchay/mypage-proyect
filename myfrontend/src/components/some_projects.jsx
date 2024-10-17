import { useState } from "react"
import Language from "../language"
import './some_projects.css'
import hollow from '../assets/images/am7dExX_460s.jpg'
import amy from '../assets/images/amy.jpg'
import vash from '../assets/images/vash.jpg'
import juana from '../assets/images/juana.jpg'
import Over from '../assets/images/Over.jpg'

function SomeProyects (){
  let sites=[]
  if(document.body.clientWidth > 700) {
    sites=[ '0' , '-50%' , '-100%' , '-150%' , '-200%' , '-250%' , '-300%' , '-350%' , '-400%']
  }else{
    sites=[ '0' , '-100%' , '-200%' , '-300%' , '-400%' , '-500%' , '-600%' , '-700%' , '-800%', '-900%']
  }
  const [ currentProy , setCurrentProy ]= useState(sites[0]);
  const nextProy = () => {    setCurrentProy((prevIndex) => (prevIndex + 1)% sites.length)
  };
  const prevProy = () => {    setCurrentProy((prevIndex) => (prevIndex - 1 + sites.length)% sites.length)
  };

  return(
    <>{/*it have to be a component - because i goin to reutilice this */}{/*it have to be search in my bakend*/}
    <section className="some-proyects">
      <h2 className="some-proyects__title">
        <Language value={"some-proyects"}/>
      </h2>
      <button type="button" onClick={prevProy} className="carousel__button" >
        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#e8eaed"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>

      </button>
      <button type="button" onClick={nextProy} className="carousel__button carousel__button__right" >
        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#e8eaed"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
      </button>
      <div className="some-proyects__carousel">
        <div className="some-proyects__container" style={{left: sites[currentProy] }}>

          <a href="" className="some-proyects__card proy1">{/*name of the pryect*/}
            <div className='some-proyects__card__img__content'> 
              <div alt="last_proyect_1" className="some-proyects__card__img" 
              style={{ 
                background: `url(${hollow})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/>{/* img of the proyects */}
            </div>
            <h3 className="some-proyects__card__title">proyects__card__1__title</h3>{/*name of the pryect*/}
            <div className="some-proyects__card__categories__container">
              <h4 className="some-proyects__card__categories">cat 1</h4>
              <h4 className="some-proyects__card__categories">cat 2</h4>
              <h4 className="some-proyects__card__categories">cat 3</h4>
            </div>
          </a>

          <a href="" className="some-proyects__card proy2">
            <div className='some-proyects__card__img__content'> 
              <div alt="last_proyect_2" className="some-proyects__card__img"
              style={{ 
                background: `url(${amy})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/> {/* img of the proyects */}
              </div>
            <h3 className="some-proyects__card__title">proyects__card__2__title</h3>{/*name of the pryect*/}
            <div className="some-proyects__card__categories__container">
              <h4 className="some-proyects__card__categories">cat 1</h4>
              <h4 className="some-proyects__card__categories">cat 2</h4>
              <h4 className="some-proyects__card__categories">cat 3</h4>
            </div>
          </a>

          <a href="" className="some-proyects__card proy3">
            <div className='some-proyects__card__img__content'> 
              <div alt="last_proyect_2" className="some-proyects__card__img"
              style={{ 
                background: `url(${vash})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/> {/* img of the proyects */}
              </div>
            <h3 className="some-proyects__card__title">proyects__card__3__title</h3>{/*name of the pryect*/}
            <div className="some-proyects__card__categories__container">
              <h4 className="some-proyects__card__categories">cat 1</h4>
              <h4 className="some-proyects__card__categories">cat 2</h4>
              <h4 className="some-proyects__card__categories">cat 3</h4>
            </div>
          </a>

          <a href="" className="some-proyects__card proy4">
            <div className='some-proyects__card__img__content'> 
              <div alt="last_proyect_2" className="some-proyects__card__img"
              style={{ 
                background: `url(${juana})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/> {/* img of the proyects */}
              </div>
            <h3 className="some-proyects__card__title">proyects__card__4__title</h3>{/*name of the pryect*/}
            <div className="some-proyects__card__categories__container">
              <h4 className="some-proyects__card__categories">cat 1</h4>
              <h4 className="some-proyects__card__categories">cat 2</h4>
              <h4 className="some-proyects__card__categories">cat 3</h4>
            </div>
          </a>

          <a href="" className="some-proyects__card proy5">
            <div className='some-proyects__card__img__content'> 
              <div alt="last_proyect_2" className="some-proyects__card__img"
              style={{ 
                background: `url(${Over})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/> {/* img of the proyects */}
              </div>
            <h3 className="some-proyects__card__title">proyects__card__5__title</h3>{/*name of the pryect*/}
            <div className="some-proyects__card__categories__container">
              <h4 className="some-proyects__card__categories">cat 1</h4>
              <h4 className="some-proyects__card__categories">cat 2</h4>
              <h4 className="some-proyects__card__categories">cat 3</h4>
            </div>
          </a>

          <a href="" className="some-proyects__card proy6">
            <div className='some-proyects__card__img__content'> 
              <div alt="last_proyect_2" className="some-proyects__card__img"
              style={{ 
                background: `url(${hollow})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/> {/* img of the proyects */}
              </div>
            <h3 className="some-proyects__card__title">proyects__card__6__title</h3>{/*name of the pryect*/}
            <div className="some-proyects__card__categories__container">
              <h4 className="some-proyects__card__categories">cat 1</h4>
              <h4 className="some-proyects__card__categories">cat 2</h4>
              <h4 className="some-proyects__card__categories">cat 3</h4>
            </div>
          </a>

          <a href="" className="some-proyects__card proy7">
            <div className='some-proyects__card__img__content'> 
              <div alt="last_proyect_2" className="some-proyects__card__img"
              style={{ 
                background: `url(${hollow})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/> {/* img of the proyects */}
              </div>
            <h3 className="some-proyects__card__title">proyects__card__7__title</h3>{/*name of the pryect*/}
            <div className="some-proyects__card__categories__container">
              <h4 className="some-proyects__card__categories">cat 1</h4>
              <h4 className="some-proyects__card__categories">cat 2</h4>
              <h4 className="some-proyects__card__categories">cat 3</h4>
            </div>
          </a>

          <a href="" className="some-proyects__card proy8">
            <div className='some-proyects__card__img__content'> 
              <div alt="last_proyect_2" className="some-proyects__card__img"
              style={{ 
                background: `url(${hollow})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/> {/* img of the proyects */}
              </div>
            <h3 className="some-proyects__card__title">proyects__card__8__title</h3>{/*name of the pryect*/}
            <div className="some-proyects__card__categories__container">
              <h4 className="some-proyects__card__categories">cat 1</h4>
              <h4 className="some-proyects__card__categories">cat 2</h4>
              <h4 className="some-proyects__card__categories">cat 3</h4>
            </div>
          </a>

          <a href="" className="some-proyects__card proy9">
            <div className='some-proyects__card__img__content'> 
              <div alt="last_proyect_2" className="some-proyects__card__img"
              style={{ 
                background: `url(${hollow})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/> {/* img of the proyects */}
              </div>
            <h3 className="some-proyects__card__title">proyects__card__9__title</h3>{/*name of the pryect*/}
            <div className="some-proyects__card__categories__container">
              <h4 className="some-proyects__card__categories">cat 1</h4>
              <h4 className="some-proyects__card__categories">cat 2</h4>
              <h4 className="some-proyects__card__categories">cat 3</h4>
            </div>
          </a>

          <a href="" className="some-proyects__card proy10">
            <div className='some-proyects__card__img__content'> 
              <div alt="last_proyect_2" className="some-proyects__card__img"
              style={{ 
                background: `url(${hollow})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/> {/* img of the proyects */}
              </div>
            <h3 className="some-proyects__card__title">proyects__card__10__title</h3>{/*name of the pryect*/}
            <div className="some-proyects__card__categories__container">
              <h4 className="some-proyects__card__categories">cat 1</h4>
              <h4 className="some-proyects__card__categories">cat 2</h4>
              <h4 className="some-proyects__card__categories">cat 3</h4>
            </div>
          </a>
          
        </div>
      </div>
    </section>
    </>
  )
}
export default SomeProyects