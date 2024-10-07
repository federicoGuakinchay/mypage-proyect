import { useState, useEffect } from "react";

function ThemeToggle() {
  // Get the initial theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Toggle the theme and apply the appropriate class to the body
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Use useEffect to apply the theme class when it changes
  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('data-theme',theme)
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.setAttribute('data-theme','light')
      localStorage.setItem('theme', 'light');
    }
  }, [theme]); // Only re-turn the effect when theme changes
  //change  d and l for svg 
  return (
    <div>
      <button onClick={toggleTheme} className="theme-button">
        {theme === 'light' ? 'L' : 'D'}
      </button>
    </div>
  );
}

export default ThemeToggle;