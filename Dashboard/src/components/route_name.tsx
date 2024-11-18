import { TiHomeOutline } from "react-icons/ti";
import { TbCalendarClock } from "react-icons/tb";
import { LuFolders, LuFileSignature, LuUsers2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { AiFillAlert } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const RouteName:React.FC = () => {
  const location_name = useLocation().pathname
  switch (true){
    case location_name.startsWith('/home'):
      return (
      <h1 className="w-full text-3xl text-left mb-[25px] ml-[25%] font-semibold flex items-center">
      <TiHomeOutline/>{location_name.substring(5)}/</h1>)
    case location_name.startsWith('/calendar'):
      return (<h1 className="w-full text-3xl text-left mb-[25px] ml-[25%] font-semibold flex items-center">
        <TbCalendarClock />{location_name.substring(9)}/</h1>)
    case location_name.startsWith('/projects'):
      return (<h1 className="w-full text-3xl text-left mb-[25px] ml-[25%] font-semibold flex items-center"> 
      <LuFolders />{location_name.substring(9)}/</h1>)
    case location_name.startsWith('/blog'):
      return (<h1 className="w-full text-3xl text-left mb-[25px] ml-[25%] font-semibold flex items-center"> 
      <LuFileSignature/>{location_name.substring(5)}/</h1>)
    case location_name.startsWith('/users'):
      return (<h1 className="w-full text-3xl text-left mb-[25px] ml-[25%] font-semibold flex items-center">
        <LuUsers2/>  {location_name.substring(6)}/</h1>)
    case location_name.startsWith('/settings'):
      return (<h1 className="w-full text-3xl text-left mb-[25px] ml-[25%] font-semibold flex items-center">
        <IoSettingsOutline/>{location_name.substring(9)}/</h1>)
    case location_name.startsWith('/task'):
      return (<h1 className="w-full text-3xl text-left mb-[25px] ml-[25%] font-semibold flex items-center">
        <AiFillAlert/>{location_name.substring(5)}/</h1>)
    default: return (<h1 className="w-full text-3xl text-left mb-[25px] ml-[25%] font-semibold flex items-center">
      {location_name}/</h1>)
  }
}
export default RouteName 