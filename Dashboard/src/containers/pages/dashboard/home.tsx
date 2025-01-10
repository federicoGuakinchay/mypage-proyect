import DashboardTemplate from "../DashboardTemplate"

function Home(){
  return (
  <DashboardTemplate>
    <div className="flex  w-full justify-end mb-1 gap-3 ">
      <button className="button-add" >add a new Post</button>
      <button className="button-add" >add a new Proyect</button>
    </div>
    <div className="flex flex-col w-full items-center"> 
      <button className="text-3xl self-start mb-2  font-semibold url">My Projects</button>
    </div>
    <div className="flex flex-col w-full items-center"> 
      <button className="text-3xl self-start mb-2 font-semibold url">My Blogs </button>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta deleniti corporis laborum accusantium, quasi in nemo iure deserunt rem iste, placeat nostrum ut magnam aut assumenda? Consequatur, est molestias!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta deleniti corporis laborum accusantium, quasi in nemo iure deserunt rem iste, placeat nostrum ut magnam aut assumenda? Consequatur, est molestias!</p>
  </DashboardTemplate>
  )
}
export default Home