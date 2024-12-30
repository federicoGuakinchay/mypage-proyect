import { useState , useEffect} from 'react';

const AppIcon: React.FC = () => {
  const [menu, setMenu] = useState(globalThis.side_menu_open); // Initialize state from the global variable

  // Update the menu state based on the global variable
  useEffect(() => {
    setMenu(globalThis.side_menu_open);
  }, [menu]); // This will run on mount and whenever 'menu' changes

  const handleSideMenuToggle = () => {
    globalThis.side_menu_open = !globalThis.side_menu_open; // Toggle the global variable
    setMenu(globalThis.side_menu_open); // Update local state to reflect the global variable
  };

  return (
    <div className={`icon flex flex-col items-center h-[78px] relative group ml-3 trancition-all duration-700  ${menu ? 'w-[185px]'  : 'w-[65px]'}`}>
      <div
        className="cursor-pointer block box-content w-full h-22"
        onClick={handleSideMenuToggle}
        onKeyDown={(e) => { if (e.key === 'Enter') handleSideMenuToggle(); }}
        tabIndex={0}
        role="button"
      >
        
        <div className="flex flex-col text-center w-[65px] h-[65px]   rounded-3xl bg-[#000] text-[#fff] relative z-10 justify-center ">
          <p className="text-l font-bold leading-none select-none">ONLY</p>
          <p className="text-l font-bold leading-none select-none">ONE</p>
        </div>
        <div className={`flex flex-col text-center top-[0px] left-[-5px] px-2 py-4 h-[65px] absolute text-[#000]   rounded-3xl bg-[#fff] z-0 truncate text-right trancition-all duration-700 w-full`} >
          <p className="text-l font-bold leading-none select-none">ANOTHER</p>
          <p className="text-l font-bold leading-none select-none">DASHBOARD</p>
        </div>
      </div>
    </div>
  );
};

export default AppIcon;
//<div className="flex flex-col  w-[65px] h-[65px]  rounded-3xl bg-[#000] relative z-10 justify-center items-center ">
//          <p className="text-l font-bold leading-none select-none">ONLY</p>
//          <p className="text-l font-bold leading-none select-none">ONE</p>
//        </div>
//        <div className={`flex flex-col justify-center top-[0px] left-[-5px] w-[65px] h-[65px] absolute rounded-3xl bg-[#fff] z-0 truncate text-black text-right trancition-all duration-700 w-full`} ></div>