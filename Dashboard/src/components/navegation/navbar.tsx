import { BsSearch } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { useState} from "react";
import { useNavigate , useLocation } from 'react-router-dom';
import { logout } from '../../redux/actions/auth/auth';
import { connect } from "react-redux";

type NavBarProps = { logout: () => void; };

const NavBar: React.FC<NavBarProps> = ({ logout }) => {
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
  const handleLogout = () => {logout(); };
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
        <div className={`notification-card  absolute rounded t-[100%] bg-[--side-bg-1] w-[300px] max-h-96 top-[125px] opacity-0 text-center transition-all duration-[1250ms] ${notif?' right-[35px] opacity-95':' opacity-0 right-[-300px]'}`}>
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
        <div className={`porfile-card absolute rounded t-[100%] bg-[--side-bg-1] w-[300px] max-h-96  text-center top-[125px] flex flex-col transition-all duration-[1250ms] min-h-[55px] ${porfile?' right-[35px] opacity-95':' opacity-0 right-[-300px]'} `}
        >
          <div className=" absolute rounded-full bg-red-600  w-[25px] h-[25px] top-[-10px] right-[-10px] hover:bg-red-500 active:bg-red-600 cursor-pointer"
          onClick={()=>setPorfile(false)}
          >X</div>
          <div className={`h-[50px] profile-option m-[5px] hover:bg-[--side-bg-2] active:bg-[--side-bg-3] rounded select-none ${location.pathname.endsWith('/my_porfile') ? 'hidden' : ''}`}>
          <button className={`p-[10px] w-full h-full ${porfile?'block':'hidden'} `}
          onClick={() => navigate('/my_porfile')}> your-porfile</button> </div>
          <div className={`h-[50px] profile-option m-[5px] hover:bg-[--side-bg-2] active:bg-[--side-bg-3]  rounded select-none`}>
          <button className={`p-[10px] w-full h-full  ${porfile?'block':'hidden'} `}
          onClick={handleLogout}> logout </button></div>
        </div>
      </div>
    </div>
  )
}
const mapDispatchToProps = {
  logout: logout,
};

export default connect(null, mapDispatchToProps)(NavBar);