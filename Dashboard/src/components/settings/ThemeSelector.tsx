import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./ThemeSelector.css";
import { GiCheckMark } from "react-icons/gi";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { button } from "framer-motion/client";

const ThemeSelector: React.FC = () => {
  const settings = useSelector((state: RootState) => state.auth.user_settings);
  const userId = useSelector((state: RootState) => state.auth.user?.id) || null;
  const theme: string = settings? settings[0]?.theme :"light1";
  const allThemes: string[] = ["light1", "light2", "dark1", "dark2"];
  const [currentMode, setCurrentMode] = useState(theme);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedTheme,setSavedTheme]=  useState(theme)

  const select = (themeAct: string) => {
    if (currentMode !== themeAct) {
      document.body.setAttribute("data-mode", themeAct);
      setCurrentMode(themeAct);
    }
  };
  // theme change if  get redux get the  user setting spend time 
  useEffect(()=>{
    setCurrentMode(theme)
  },[theme])

  const handleButtonChange = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.setItem('theme',currentMode) 
    setSavedTheme(currentMode)
    if (!userId) {
        setError("User ID is missing.");
        return;
    }

    setIsLoading(true);
    setError(null);

    try {
        // Clone the settings and update the theme
        const updatedSettings = { ...settings[0], theme: currentMode };
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Content-Type': 'application/json'
            }
        };

        console.log(userId, "userId");
        console.log(import.meta.env.VITE_API_URL, "API URL");

        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/api/user-settings/${userId}/`,
            updatedSettings,
            config
        );

        console.log("Settings updated successfully:", response.data);
        
    } catch (err: any)  {
        if (err.response) {
            console.error("Server responded with error:", err.response.data);
            setError(err.response.data.detail || "Failed to update settings.");
        } else if (err.request) {
            console.error("No response from server:", err.request);
            setError("No response from server. Please check your connection.");
        } else {
            console.error("Error during request setup:", err.message);
            setError("Unexpected error occurred.");
        }
    } finally {
        setIsLoading(false);
    }
};

  return (
    <>
      <p className="text-3xl font-bold w-full p-4">Themes:</p>
      <form action="" className="p-4 flex gap-4 w-full items-center flex-wrap justify-center">
        <div className="p-4 flex gap-4 w-full items-center justify-center">
          <p className="text-lg font-medium">Current theme saved:</p>
          <label
            className={`container ${savedTheme} min-w-12 min-h-12 max-h-12 max-w-12 rounded-[50%]`}
            key="current-theme"
          >
            <span className="checkmark">
              <GiCheckMark />
            </span>
          </label>
        </div>
        <p className="text-lg font-medium ml-8">All Themes:</p>
        {allThemes.map((th, index) => {
          return (
            <label
              className={`container ${th} min-w-12 min-h-12 max-h-12 max-w-12 rounded-[50%] mr-8 ${
                currentMode === th ? "selected" : ""
              }`}
              key={index}
              tabIndex={0}
              role="button"
              aria-checked={currentMode === th}
              aria-label={`Select ${th} theme`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  select(th);
                }}}
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
          );
        }
        )}
        <button
          disabled={savedTheme === currentMode || isLoading}
          onClick={handleButtonChange}
          className={`save_theme ${
            savedTheme === currentMode ? "button-unactive" : "button-add"
          }`}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </>
  );
};

export default ThemeSelector;