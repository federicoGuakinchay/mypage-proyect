import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';
import { useEffect } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) =>{
  const settings = useSelector((state:RootState) => state.auth.user_settings)
  const theme = settings? settings[0].theme : 'light1'
  useEffect(()=>{
    document.body.setAttribute("data-mode", theme);
  },[theme])
  return <>{children}</>;
}

export default ThemeProvider
// type Theme = 'light' | 'dark' | 'blue' | 'green';

// interface ThemeContextType {
//   theme: Theme;
//   setTheme: (newTheme: Theme) => void;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>('light');

//   const toggleTheme = () => {
//     const themes: Theme[] = ['light', 'dark', 'blue', 'green'];
//     const currentIndex = themes.indexOf(theme);
//     const nextTheme = themes[(currentIndex + 1) % themes.length];
//     setTheme(nextTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
//       <div className={`theme-${theme}`}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };`
