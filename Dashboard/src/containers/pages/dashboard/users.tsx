import DashboardTemplate from "../DashboardTemplate"

function  Users(){
  return (
  <DashboardTemplate>
    <div className="flex  w-full justify-end mb-[25px] ">
      <button className="button-add" >add a new user </button>
    </div>
  </DashboardTemplate>
  )
}
export default Users