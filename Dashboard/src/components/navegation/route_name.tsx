import { useLocation , useNavigate } from "react-router-dom";

const RouteName:React.FC = () => {
  const location_name = useLocation().pathname
  const navigate = useNavigate()
  const parts = []
  for (const part of location_name.split('/')){
    if (part!=='')parts.push(part)
  }
  const navegate_location =(location:string)=>{
    for (const part of location_name.split('/')){
      let path = ''
      if (part===location){
        navigate(path + '/' + part)
      }
      else path = path + '/' + part
  }}

  return (
      <>
        { parts.map((part, index)=>(
          <span
            key={index}>/ 
            <span 
              role="button"
              tabIndex={0}
              onClick={()=>navegate_location(part)}
              onKeyDown={(e)=>{if (e.key === 'Enter')navegate_location(part)}}
              className="selectnone px-[5px] relative transition-transform url " >{part}</span> </span>
        )) }
        </>
  );
};

export default RouteName;
