import Language from "../language"

function Leyend(){
  return(
    <section style={{padding:"5% 10%"}}>
      <h2 style={{fontSize:" 30px"}} >
        <Language value={"leyend-title"}/>
      </h2>
      <p style={{fontSize:"18px" , textWrap:"pretty"}}>
        <Language value={"leyend-text-1"} />
      </p>
      <p style={{fontSize:"18px" , textWrap:"pretty"}}>
        <Language value={"leyend-text-2"} />
      </p>
    </section>
  )
}

export default Leyend