import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./ThemeSelector.css";
import { GiCheckMark } from "react-icons/gi";
import { useState, useEffect } from "react";

const ThemeSelector: React.FC = () => {
  const settings = useSelector((state: RootState) => state.auth.user_settings);
  const theme: string = settings ? settings[0].theme : "light1";
  const allThemes: string[] = ["light1", "light2", "dark1", "dark2"];
  const [currentMode,setCurrentMode]= useState(document.body.getAttribute("data-mode"))
  const [active,setActivate]= useState(theme===currentMode?true:false)

  const select = (themeAct: string) => {
    if (currentMode !== themeAct) {
      document.body.setAttribute("data-mode", themeAct);
      setCurrentMode(themeAct)
    }
  };
  useEffect(() => {
    setActivate(theme===currentMode?true:false)
  },[currentMode,theme])


  return (
    <>
    <p className="text-3xl font-bold w-full p-4">Themes:</p>
    <form action="" className="p-4 flex gap-4 w-full items-center">
    <p className="text-lg font-medium">Current theme saved:</p>
      <label
        className={`container ${theme} min-w-12 min-h-12 max-h-12 max-w-12 rounded-[50%]`}
        key="current-theme"
      >
        <input
          type="radio"
          name="theme"
          checked={currentMode === theme}
          onChange={() => select(theme)}
        />
        <span className="checkmark">
          <GiCheckMark />
        </span>
      </label>
      <p className="text-lg font-medium ml-8">other themes: </p>
      {allThemes.map((th,index) => {
        if(theme !== th){ 
          return(
            <label
              className={`container ${th} min-w-12 min-h-12 max-h-12 max-w-12 rounded-[50%] mr-8 ${
                currentMode === th ? "selected" : ""
              }`}
              key={index}
            >
              <input
                type="radio"
                name="theme"
                checked={currentMode === th}
                onChange={() => select(th)}
              />
              <span className="checkmark">
                <GiCheckMark />
              </span>
            </label>
          )}})}
      <button
        className={`save_theme ${
          active? "button-unactive" : "button-add"
        }`}
      >
        Save
      </button>
    </form>
  </>
  );
};

export default ThemeSelector;