import { BsSearch } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { useState} from "react";
import { useNavigate , useLocation } from 'react-router-dom';
import { logout } from '../../redux/actions/auth/auth';
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { Root_State } from "../../store";

type NavBarProps = { logout: () => void; };

const NavBar: React.FC<NavBarProps> = ({ logout }) => {

  const user = useSelector((state: Root_State) => state.auth.user);
  const img  = user?  user.picture : null 
  console.log(img)

  const [notif , setNotif ] = useState(false) 
  const [messageM , setMessageM ] = useState(false) 
  const [porfile , setPorfile] = useState(false)

  const message_menu = ()=>{
    if (porfile===true) setPorfile(false); 
    if (notif===true) setNotif(false);
      setMessageM(!messageM)
  }
  const notification_menu = ()=>{
    if (porfile===true) setPorfile(false);
    if (messageM===true) setMessageM(false);
    setNotif(!notif)
  }
  const porfile_menu = ()=>{
    if (notif===true) setNotif(false);
    if (messageM===true) setMessageM(false);
    setPorfile(!porfile)
  }
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {logout(); };
  return(
    <div className="w-full nav-bar h-[75px] side-bar rounded-br-3xl flex items-center p-2  justify-between">
      <div className="search-filt__input h-full  flex items-center gap-1 w-3/5 ">
        <input type="text" placeholder="Search" id='search-bar' 
        className="h-4/5  rounded-l-lg w-full px-4 m-2  mr-0"/>

        <button className="search-button h-4/5 w-[60px] text-center rounded-r-xl flex items-center justify-center">
          <BsSearch size={24}/>
        </button>
      </div>
      <div className="flex gap-8">




        <button className="relative w-[60px] h-[60px]   rounded-full flex items-center content-center justify-center side-bar__item text-[--bar-text]"
        onClick={message_menu }>
          <IoMailOutline size={34}/>
          <span className="notification-card__count absolute bg-red-600 rounded-full w-[25px] h-[25px] top-0 right-0"> 5 </span>
        </button>
        <div className={`notification-card  z-30 absolute rounded t-[100%] bg-[--bar-btn] w-[300px] max-h-96 top-[90px] opacity-0 text-center transition-all duration-[1250ms] ${messageM?' right-[35px] opacity-95':' opacity-0 right-[-300px]'}`}>
          <div className=" absolute rounded-full bg-red-600  w-[25px] h-[25px] top-[-10px] right-[-10px] hover:bg-red-500 active:bg-red-600 cursor-pointer cursor-pointer"
            onClick={()=>setMessageM(false)}
            >X</div>
          <div className="notification-card__title">Messages </div>
          <div className="notification-card__content">You have 5 unread messages</div>
          {/* here request notifications (request from the data base) */}
        </div>




        <button className="relative w-[60px] h-[60px]   rounded-full flex items-center content-center justify-center side-bar__item text-[--bar-text]"
        onClick={notification_menu }>
          <MdNotificationsActive size={34}/>
          <span className="notification-card__count absolute bg-red-600 rounded-full w-[25px] h-[25px] top-0 right-0"> 5 </span>
        </button>
        <div className={`notification-card  z-30 absolute rounded t-[100%] bg-[--bar-btn] w-[300px] max-h-96 top-[90px] opacity-0 text-center transition-all duration-[1250ms] ${notif?' right-[35px] opacity-95':' opacity-0 right-[-300px]'}`}>
          <div className=" absolute rounded-full bg-red-600  w-[25px] h-[25px] top-[-10px] right-[-10px] hover:bg-red-500 active:bg-red-600 cursor-pointer cursor-pointer"
            onClick={()=>setNotif(false)}
            >X</div>
          <div className="notification-card__title">Notifications </div>
          <div className="notification-card__content">You have 5 unread notifications</div>
          {/* here request notifications (request from the data base) */}
        </div>


        
        <button className="w-[60px] h-[60px] rounded-full flex items-center justify-center overflow-hidden side-bar__item hover:brightness-150 active:brightness-200"
        onClick={porfile_menu}  >
          {img?<img src={img} /> : <CgProfile className="w-[100%] h-[100%]"/>}
        </button>
        <div className={`porfile-card z-30 absolute rounded t-[100%] bg-[--bar-btn] w-[300px] max-h-96  text-center top-[90px] flex flex-col transition-all duration-[1250ms] min-h-[55px] ${porfile?' right-[35px] opacity-95':' opacity-0 right-[-300px]'} `}
        >
          <div className=" absolute rounded-full bg-red-600  w-[25px] h-[25px] top-[-10px] right-[-10px] hover:bg-red-500 active:bg-red-600 cursor-pointer"
          onClick={()=>setPorfile(false)}
          >X</div>
          <div className={`h-[50px] profile-option m-[5px] side-bar__item rounded select-none ${location.pathname.endsWith('/my_porfile') ? 'hidden' : ''}`}>
          <button className={`p-[10px] w-full h-full ${porfile?'block':'hidden'} `}
          onClick={() => navigate('/my_porfile')}> your-porfile</button> </div>
          <div className={`h-[50px] profile-option m-[5px] side-bar__item rounded select-none`}>
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