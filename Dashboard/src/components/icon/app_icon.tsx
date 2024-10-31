import { useState , useEffect} from 'react';

globalThis.side_menu_open = false; // Initialize the global variable

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
    <div className={`icon flex flex-col items-center h-[78px] relative group ml-3 trancition-all duration-700  ${menu ? 'w-[75px]': 'w-[200px]'}`}>
      <div
        className="cursor-pointer block box-content w-full h-22"
        onClick={handleSideMenuToggle}
        onKeyDown={(e) => { if (e.key === 'Enter') handleSideMenuToggle(); }}
        tabIndex={0}
        role="button"
      >
        <div className="flex flex-col text-center px-3 w-[75px] py-4 rounded-3xl bg-[#000] relative z-10  ">
          <p className="text-xl font-bold leading-none select-none">ONLY</p>
          <p className="text-xl font-bold leading-none select-none">ONE</p>
        </div>
        <div className={`flex flex-col text-center top-[0px] left-[-5px] px-3 py-4 w-[75px] absolute rounded-3xl bg-[#fff] z-0 truncate text-black text-right trancition-all duration-700 w-full`} >
          <p className="text-l font-bold leading-0 select-none">ANOTHER</p>
          <p className="text-l font-bold leading-none select-none">DASHBOARD</p>
        </div>
      </div>
    </div>
  );
};

export default AppIcon;