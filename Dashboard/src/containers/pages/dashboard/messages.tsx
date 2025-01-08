import DashboardTemplate from "../DashboardTemplate"

function  Messages(){
  return (
  <DashboardTemplate>
    <div className="flex  w-full justify-end mb-[25px] ">
      <button className="button-add" >add a new task </button>
    </div>
  </DashboardTemplate>
  )
}
export default  Messages