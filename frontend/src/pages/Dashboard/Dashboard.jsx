import NavbarDashboard from "../../components/Dashboard/NavbarDashboard";
import ProjectList from "../../components/Dashboard/ProjectList";

const Dashboard = () => {
  
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full">
      <div className="flex flex-col bg-[#141414] h-212.5 w-275 border border-[#383838] rounded-3xl">
        <NavbarDashboard />
        <ProjectList />
      </div>
    </div>
  )
}

export default Dashboard;