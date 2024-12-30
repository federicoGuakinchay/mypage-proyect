  //return (
  //  <div className="side-bar h-full w-fit rounded-br-3xl">
  //    <div className="px-0 pt-2">
  //      <AppIcon />
  //    </div>
  //    <ul className="h-full p-1 flex flex-col gap-2">
  //      <li
  //        className={`side-bar__item dash w-full relative rounded-lg truncate ${location.pathname.endsWith('/home') ? 'active' : ''}`}
  //        onClick={() => navigate('/home')}
  //        onKeyDown={(e)=>{if (e.key === 'Enter') navigate('/home');}}
  //        tabIndex={0}
  //        role='button'
  //      >
  //        <div className='relative w-[80px] py-2 flex justify-center z-10 bg-inherit'>
  //          <TiHomeOutline size={34} />
  //        </div>
  //        <div className='absolute w-full h-full top-0 left-0'>
  //          <p className='text-l font-bold leading-[3rem] pr-3 flex items-center justify-end select-none'>Dashboard</p>
  //        </div>
  //      </li>
  //      
  //      <li
  //        className={`side-bar__item dash w-full relative rounded-lg truncate ${location.pathname.endsWith('/projects') ? 'active' : ''}`}
  //        onClick={() => navigate('/projects')}
  //        onKeyDown={(e)=>{if (e.key === 'Enter') navigate('/projects');}}
  //        tabIndex={0}
  //        role='button'
  //      >
  //        <div className='relative w-[80px] py-2 flex justify-center z-10 bg-inherit'>
  //          <LuFolders size={34} />
  //        </div>
  //        <div className='absolute w-full h-full top-0 left-0'>
  //          <p className='text-l font-bold leading-[3rem] pr-3 flex items-center justify-end select-none'>Projects</p>
  //        </div>
  //      </li>
  //      
  //      <li
  //        className={`side-bar__item dash w-full relative rounded-lg truncate ${location.pathname.endsWith('/blog') ? 'active' : ''}`}
  //        onClick={() => navigate('/blog')}
  //        onKeyDown={(e)=>{if (e.key === 'Enter') navigate('/blog');}}
  //        tabIndex={0}
  //        role='button'
  //      >
  //        <div className='relative w-[80px] py-2 flex justify-center z-10 bg-inherit'>
  //          <LuFileSignature size={34} />
  //        </div>
  //        <div className='absolute w-full h-full top-0 left-0'>
  //          <p className='text-l font-bold leading-[3rem] pr-3 flex items-center justify-end select-none'>Blog</p>
  //        </div>
  //      </li>
//
  //      <li
  //        className={`side-bar__item dash w-full relative rounded-lg truncate ${location.pathname.endsWith('/users') ? 'active' : ''}`}
  //        onClick={() => navigate('/users')}
  //        onKeyDown={(e)=>{if (e.key === 'Enter') navigate('/users');}}
  //        tabIndex={0}
  //        role='button'
  //      >
  //        <div className='relative w-[80px] py-2 flex justify-center z-10 bg-inherit'>
  //          <LuUsers2 size={34} />
  //        </div>
  //        <div className='absolute w-full h-full top-0 left-0'>
  //          <p className='text-l font-bold leading-[3rem] pr-3 flex items-center justify-end select-none'>Users</p>
  //        </div>
  //      </li>
  //      <li
  //        className={`side-bar__item dash w-full relative rounded-lg truncate ${location.pathname.endsWith('/calendar') ? 'active' : ''}`}
  //        onClick={() => navigate('/calendar')}
  //        onKeyDown={(e)=>{if (e.key === 'Enter') navigate('/calendar');}}
  //        tabIndex={0}
  //        role='button'
  //      >
  //        <div className='relative w-[80px] py-2 flex justify-center z-10 bg-inherit'>
  //          <TbCalendarClock size={34} />
  //        </div>
  //        <div className='absolute w-full h-full top-0 left-0'>
  //          <p className='text-l font-bold leading-[3rem] pr-3 flex items-center justify-end select-none'>calendar</p>
  //        </div>
  //      </li>
//
  //      <li
  //        className={`side-bar__item dash w-full relative rounded-lg truncate ${location.pathname.endsWith('/task') ? 'active' : 'color_blink'}`}
  //        onClick={() => navigate('/task')}
  //        onKeyDown={(e)=>{if (e.key === 'Enter') navigate('/task');}}
  //        tabIndex={0}
  //        role='button'
  //      >
  //        <div className='relative w-[80px] py-2 flex justify-center z-10 bg-inherit'>
  //          <AiFillAlert size={34}  />
  //        </div>
  //        <div className='absolute w-full h-full top-0 left-0'>
  //          <p className='text-l font-bold leading-[3rem] pr-3 flex items-center justify-end select-none'>task</p>
  //        </div>
  //      </li>
//
  //      <li className="w-full relative rounded-lg truncate grow"></li>
//
  //      <li
  //        className={`side-bar__item dash w-full relative rounded-lg truncate group ${location.pathname.endsWith('/settings') ? 'active' : ''}`}
  //        onClick={() => navigate('/settings')}
  //        onKeyDown={(e)=>{if (e.key === 'Enter') navigate('/settings');}}
  //        tabIndex={0}
  //        role='button'
  //      >
  //        <div className='relative w-[80px] py-2 flex justify-center z-10 bg-inherit'>
  //          <IoSettingsOutline size={34} className='transition-transform group-hover:rotate-[360deg]
  //          group-focus:rotate-[360deg] duration-[1500ms]'/>
  //        </div>
  //        <div className='absolute w-full h-full top-0 left-0'>
  //          <p className='text-l font-bold leading-[3rem] pr-3 flex items-center justify-end select-none'>Settings</p>
  //        </div>
  //      </li>
  //    </ul>
  //  </div>
  //);
//
//

import AppIcon from '../icon/app_icon';
import { TiHomeOutline } from "react-icons/ti";
import { TbCalendarClock } from "react-icons/tb";
import { LuFolders, LuFileSignature, LuUsers2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { AiFillAlert } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

// Define the sidebar component
const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const principalLocations: string[] = ['home', 'projects', 'blog', 'users', 'calendar', 'task', 'settings'];
  const principalIcons: React.ElementType[] = [
    TiHomeOutline,
    LuFolders,
    LuFileSignature,
    LuUsers2,
    TbCalendarClock,
    AiFillAlert,
    IoSettingsOutline
  ];

  let currentLocation: string = '';
  // Determine current location based on window location pathname
  for (const Location of principalLocations) {
    if (window.location.pathname.endsWith(Location)) {
      currentLocation = Location;
      break;
    }
  }

  // Function to handle navigation
  const GoTo = (location: string) => {
    if(location !== currentLocation)navigate(`/${location}`);
  };

  return (
    <div className="side-bar h-full w-fit rounded-br-3xl">
      <div className="px-0 pt-2">
        <AppIcon />
      </div>
      <ul className="h-full p-1 flex flex-col gap-2">
        {
          // Iterate over the locations and render corresponding icons
          principalLocations.map((location, index) => {
            const Icon = principalIcons[index]; // Get the corresponding icon for each location
            return (
              <li
                key={location} // Unique key for each list item
                className={`side-bar__item dash w-full relative rounded-lg truncate group self-end ${location==='task'?'color_blink':''} ${location === currentLocation ? 'active' : ''} `}
                onClick={() => GoTo(location)}
                onKeyDown={(e) => { if (e.key === 'Enter') GoTo(location); }}
                tabIndex={0}
                role='button'
              >
                <div className='relative w-[80px] py-2 flex justify-center z-10 bg-inherit'>
                  <Icon size={34} className={`${location==='settings'?'transition-transform group-hover:rotate-[360deg] group-focus:rotate-[360deg] duration-[1500ms]':''}`}/> 
                </div>
                <div className='absolute w-full h-full top-0 left-0'>
                  <p className='text-xl font-bold leading-[3rem] pr-3 flex items-center justify-end select-none capitalize'>
                    {location}
                  </p>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default SideBar;