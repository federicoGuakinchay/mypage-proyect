import DashboardTemplate from "../DashboardTemplate"
import { useSelector } from "react-redux"
import { RootState } from '../../redux/store';
import ThemeSelector from '../../../components/settings/ThemeSelector.tsx'
// import ThemeSwitcher from "../../../components/settings/ThemeSwitcher"
function Settings(){
  const settings = useSelector((state:RootState) => state.auth.user_settings)
  console.log(settings)
  return (
  <DashboardTemplate>
    <ThemeSelector></ThemeSelector>
    <div>reset_password</div>
    <div>my_porfile</div>
    <div>Delete Porfile</div>
  </DashboardTemplate>
  )
}
export default Settings