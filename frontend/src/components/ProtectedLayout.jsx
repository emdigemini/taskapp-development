import Navbar from "./Navbar/Navbar"
import ProjectProvider from "../context/Projects/ProjectProvider"

const ProtectedLayout = () => {
  return (
    <div className="flex w-full">
      <ProjectProvider>
        <Navbar />
      </ProjectProvider>
    </div>
  )
}

export default ProtectedLayout