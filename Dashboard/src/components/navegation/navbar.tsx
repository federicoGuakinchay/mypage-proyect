import { BsSearch } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { useState} from "react";
import { useNavigate , useLocation } from 'react-router-dom';

const SideBar: React.FC = () => {
  const [notif , setNotif ] = useState(false) 
  const [porfile , setPorfile] = useState(false)

  const notification_menu = ()=>{
    if (porfile===true) setPorfile(false)
    setNotif(!notif)
  }
  const porfile_menu = ()=>{
    if (notif===true) setNotif(false)
    setPorfile(!porfile)
  }
  const navigate = useNavigate();
  const location = useLocation();
  return(
    <div className="w-full nav-bar h-[90px] side-bar rounded-br-3xl flex items-center py-4 px-14 justify-between ">
      <div className="search-filt__input h-full  flex items-center gap-0 w-3/5 ">
        <input type="text" placeholder="Search" id='search-bar' 
        className="h-4/5  rounded-l-lg w-full px-4 m-2  mr-0"/>

        <button className="search-button h-[46px] min-w-[46px] text-center rounded-r-xl flex items-center justify-center">
          <BsSearch size={24}/>
        </button>
      </div>
      <div className="flex gap-4">
        <button className="relative w-[70px] h-[70px]  rounded-full flex items-center content-center justify-center side-bar__item"
        onClick={notification_menu }>
          <MdNotificationsActive size={34}/>
          <span className="notification-card__count absolute bg-red-600 rounded-full w-[25px] h-[25px] top-0 right-0"> 5 </span>
        </button>
        <div className={`notification-card  absolute rounded t-[100%] bg-blue-500 w-[300px] max-h-96 top-[125px] opacity-0 text-center transition-all duration-[1250ms] ${notif?' right-[35px] opacity-70':' opacity-0 right-[-300px]'}`}>
          <div className=" absolute rounded-full bg-red-600  w-[25px] h-[25px] top-[-10px] right-[-10px] hover:bg-red-500 active:bg-red-600 cursor-pointer cursor-pointer"
            onClick={()=>setNotif(false)}
            >X</div>
          <div className="notification-card__title">Notifications </div>
          <div className="notification-card__content">You have 5 unread notifications</div>
          {/* here request notifications (request from the data base) */}
        </div>
        <button className="w-[70px] h-[70px] bg-sky-500 rounded-full flex items-center justify-center overflow-hidden side-bar__item"
        onClick={porfile_menu}>
          <img src="" alt="porfile-img" />
        </button>
        <div className={`porfile-card absolute rounded t-[100%] bg-blue-500 w-[300px] max-h-96  text-center top-[125px] flex flex-col transition-all duration-[1250ms] min-h-[55px] ${porfile?' right-[35px] opacity-70':' opacity-0 right-[-300px]'} `}
        >
          <div className=" absolute rounded-full bg-red-600  w-[25px] h-[25px] top-[-10px] right-[-10px] hover:bg-red-500 active:bg-red-600 cursor-pointer"
          onClick={()=>setPorfile(false)}
          >X</div>
          <button className={` profile-option p-[10px] m-[5px] hover:bg-blue-600 active:bg-blue-700 rounded select-none ${porfile?'block':'hidden'} ${location.pathname.endsWith('/my_porfile') ? 'hidden' : ''} `}
          onClick={() => navigate('/my_porfile')}> your-porfile</button>
          <button className={` profile-option p-[10px] m-[5px] hover:bg-blue-600 active:bg-blue-700 rounded select-none ${porfile?'block':'hidden'} `}
          onClick={() => navigate('/logout')}> logout </button>
        </div>
      </div>
    </div>
  )
}
export default SideBar 