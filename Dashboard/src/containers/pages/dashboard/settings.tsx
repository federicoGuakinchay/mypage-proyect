import DashboardTemplate from "../DashboardTemplate"
import ThemeSelector from '../../../components/settings/ThemeSelector.tsx'
// import ThemeSwitcher from "../../../components/settings/ThemeSwitcher"
function Settings(){
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