import SideBar from "../../../components/navegation/sidebar"
import NavBar from "../../../components/navegation/navbar"
import MyFooter from "../../../components/myfooter"
import Layout from "../../../hocs/layouts/logout_layout"
import RouteName from "../../../components/route_name"

function  Task(){
  return (
    <Layout>
    <div className="h-dvh w-dvw flex bg-content ">
      <SideBar />
      <div className="h-full w-dvw flex flex-col ">
        <NavBar />
        <main className="h-4/5 w-full p-2 overflow-y-auto scrollbar-thin  overflow-x-hidden scrollbar-thumb-blue-500 scrollbar-track-gray-100">
          <div className="h-full w-full flex flex-col  items-center "> 
            <RouteName/>
            <div className="flex  w-full justify-end mb-[25px] ">
              <button className="button-add" >add a new task </button>
            </div>
          </div>
        </main>
        <MyFooter/>
      </div>
    </div>
    </Layout>
  )
}
export default  Task