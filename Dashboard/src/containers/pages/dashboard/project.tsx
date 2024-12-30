import DashboardTemplate from "../DashboardTemplate"

function Project(){
  return (
    <DashboardTemplate>
      <div className="flex  w-full justify-end mb-[25px] ">
        <button className="button-add" >add a new Post</button>
      </div>
    </DashboardTemplate>
  )
}
export default Project