import SideBar from "../../components/navegation/sidebar"
import NavBar from "../../components/navegation/navbar"
import MyFooter from "../../components/myfooter"
import Layout from "../../hocs/layouts/logout_layout"
import React from "react";

// To Allow passing children to this component
type DashboardProps = {
  children?: React.ReactNode; 
};

function DashboardTemplate({ children }: DashboardProps){
  console.log(SideBar)
  return (
    <Layout>
    <div className="h-dvh w-dvw flex bg-[--main-bg] text-[--main-text] ">
      <SideBar />
      <div className="h-full w-dvw flex flex-col ">
        <NavBar />
        <main className="h-4/5 w-full p-2 overflow-y-auto scrollbar-thin overflow-x-hidden scrollbar-thumb-blue-500 scrollbar-track-gray-100 max-h-full grow pb-12">
          <div className=" w-full flex flex-col  items-center"> 
            {children}
          </div>
        </main>
        <MyFooter   />
      </div>
    </div>
    </Layout>
  )
}
export default  DashboardTemplate