import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';
import { useEffect } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) =>{
  const settings = useSelector((state:RootState) => state.auth.user_settings)
  const theme  = localStorage.getItem('theme')?? settings?.[0]?.theme?? 'light1'
  useEffect(()=>{
    document.body.setAttribute("data-mode", theme);
  },[theme])
  return <>{children}</>;
}

export default ThemeProvider