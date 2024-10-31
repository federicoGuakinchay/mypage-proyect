import SideBar from "../../components/navegation/sidebar"
import NavBar from "../../components/navegation/navbar"
import MyFooter from "../../components/myfooter"

function Project(){
  return (
    <div className="h-dvh w-dvw flex">
      <SideBar />
      <div className="h-full w-dvw flex flex-col ">
        <NavBar />
        <main className="h-4/5 w-full p-2 ">
          <div className="h-full w-full bg-content rounded-3xl">

          </div>
        </main>
        <MyFooter/>
      </div>
    </div>
  )
}
export default Project