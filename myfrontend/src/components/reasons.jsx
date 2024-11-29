import { TranlateComponent } from './settings/language';
import '../styles/components/reasons.css'
import { MdAllInclusive , MdOutlineAutoGraph } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { FaFolderOpen } from "react-icons/fa6";
import { RiShieldStarFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

function  Reasons () {

  // make an update and save this in  the  back-end
  return (
    <>
    <section className="reasons">   {/*it have to be a component - because i goin to reutilice this */}  
      <div className="reasons__item title__reasons__item">
        <div className='reasons__header'>
          <h3 className="reasons__title">
            <TranlateComponent   value={"reasons-title-1"}/>
          </h3>
          <div className="reasons__icon"></div>
        </div>
        <p className='reasons__text'>
          <TranlateComponent   value={"reasons-text-1"}/>
        </p>
      </div>
      <div className="reasons__item ">
        <div className='reasons__header'>
          <h3 className="reasons__title">
            <TranlateComponent   value={"reasons-title-2"}/>
          </h3>
          <div className="reasons__icon"><MdAllInclusive size={50} className='Reason-icons' /></div>
        </div>
        <p className='reasons__text'>
          <TranlateComponent   value={"reasons-text-2"}/>
        </p>
      </div>
      <div className="reasons__item ">
        <div className='reasons__header'>
          <h3 className="reasons__title">
            <TranlateComponent   value={"reasons-title-3"}/>
          </h3>
          <div className="reasons__icon"><MdOutlineAutoGraph size={50} className='Reason-icons' /></div>
        </div>
        <p className='reasons__text'>
          <TranlateComponent   value={"reasons-text-3"}/>
        </p>
      </div>
      <div className="reasons__item ">
        <div className='reasons__header'>
          <h3 className="reasons__title">
            <TranlateComponent   value={"reasons-title-4"}/>
          </h3>
          <div className="reasons__icon"><HiLightBulb size={50} className='Reason-icons' /></div>
        </div>
        <p className='reasons__text'>
          <TranlateComponent   value={"reasons-text-4"}/>
        </p>
      </div>
      <div className="reasons__item ">
        <div className='reasons__header'>
          <h3 className="reasons__title">
            <TranlateComponent   value={"reasons-title-5"}/>
          </h3>
          <div className="reasons__icon"><FaFolderOpen size={50} className='Reason-icons' /></div>
        </div>
        <p className='reasons__text'>
          <TranlateComponent   value={"reasons-text-5"}/>
        </p>
      </div>
      <div className="reasons__item ">
        <div className='reasons__header'>
          <h3 className="reasons__title">
            <TranlateComponent   value={"reasons-title-6"}/>
          </h3>
          <div className="reasons__icon"><RiShieldStarFill size={50} className='Reason-icons' /></div>
        </div>
        <p className='reasons__text'>
          <TranlateComponent   value={"reasons-text-6"}/>
        </p>
      </div>
      <div className="reasons__item title__reasons__item">
        <div className='reasons__header'>
          <h3 className="reasons__title">
            <TranlateComponent   value={"reasons-title-7"}/>
          </h3>
          <div className="reasons__icon"><TbWorldCode size={50} className='Reason-icons' /></div>
        </div>
        <p className='reasons__text'>
          <TranlateComponent   value={"reasons-text-7"}/>
        </p>
      </div>
      <div className="reasons__item">
        <div className='reasons__header'>
          <h3 className="reasons__title">
            <TranlateComponent   value={"reasons-title-8"}/>
          </h3>
          <div className="reasons__icon"><FaComments size={50} className='Reason-icons' /></div>
        </div>
        <p className='reasons__text'>
          <TranlateComponent   value={"reasons-text-8"}/>
        </p>
      </div>
      <div className="reasons__item ">
        <div className='reasons__header'>
          <h3 className="reasons__title">
            <TranlateComponent   value={"reasons-title-9"}/>
          </h3>
          <div className="reasons__icon"><BiWorld size={50} className='Reason-icons' /></div>
        </div>
        <p className='reasons__text'>
          <TranlateComponent   value={"reasons-text-9"}/>
        </p>
      </div>
    </section>
    </>
  )
}
export default Reasons 