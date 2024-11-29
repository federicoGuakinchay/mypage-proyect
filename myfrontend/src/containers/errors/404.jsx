import { TbError404Off } from "react-icons/tb";
import { BiMessageSquareError } from "react-icons/bi";
import { TbHome } from "react-icons/tb";
import '../../styles/errors/404.css'
import { useNavigate } from 'react-router-dom';
import {TranlateComponent}   from "../../components/settings/language";

function Error404(){
  const navigate = useNavigate();
  const goHome = () => {navigate('/'); };

  return (
    <>
      <main style={{
        display:"flex",
        flexDirection: "column",
        alignItems : "center",
        }}>
        <h2 style={{fontSize:'3rem', display:"flex", gap:"30px", color:"var(--button-hover)" }} >Error <TbError404Off size={70} /> </h2>

        <h3 style={{fontSize:'2rem' }} > <TranlateComponent   value={"404-text"}/><BiMessageSquareError size={40}/> </h3>
        <button 
        className="go_home"
        onClick={goHome} 
        ><TranlateComponent   value={"404-btn"}/> <TbHome/> </button>
      </main>
    </>
  )
}
export default Error404