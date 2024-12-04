import SideBar from "../../../components/navegation/sidebar"
import NavBar from "../../../components/navegation/navbar"
import MyFooter from "../../../components/myfooter"
import Layout from "../../../hocs/layouts/logout_layout"
import Carrousel from "../../../components/carrousel"
import RouteName from "../../../components/route_name"

function Home(){
  return (
    <Layout>
    <div className="h-dvh w-dvw flex bg-content ">
      <SideBar />
      <div className="h-full w-dvw flex flex-col ">
        <NavBar />
        <main className="h-4/5 w-full p-2 overflow-y-auto scrollbar-thin  overflow-x-hidden scrollbar-thumb-blue-500 scrollbar-track-gray-100">
          <div className="h-full w-full flex flex-col  items-center "> 
            <RouteName/>
            <h2 className="text-3xl text-center mb-1">Let's start work!!!</h2>
            <div className="flex  w-full justify-evenly mb-1 ">
              <button className="button-add" >add a new Post</button>
              <button className="button-add" >add a new Proyect</button>
            </div>
            <div className="flex flex-col w-full items-center"> 
              <button className="text-3xl self-start mb-2 hover:text-[--search-bg-1] font-semibold transition-color hover:pl-[15px] duration-[300ms] active:text-[--side-bg-1]">My Projects</button>
              <Carrousel ITEMS={null}/>
            </div>
            <div className="flex flex-col w-full items-center"> 
              <button className="text-3xl self-start mb-2 hover:text-[--search-bg-1] font-semibold transition-color hover:pl-[15px] duration-[300ms] active:text-[--side-bg-1]">My Blogs </button>
              <Carrousel ITEMS={null}/>
            </div>
          </div>
        </main>
        <MyFooter/>
      </div>
    </div>
    </Layout>
  )
}
export default Home