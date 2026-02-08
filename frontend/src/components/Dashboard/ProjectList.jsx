import { useContext } from "react"
import projectContext from "../../context/Projects/projectContext";
import { transformDate } from "../../lib/transformDate.js";

const ProjectList = () => {
  const { projects } = useContext(projectContext);

  return (
    <div className="flex h-full flex-col gap-6 py-8">
      <div className="flex justify-around">
        <div className="flex flex-col items-center text-white">
          <p className="text-xl">{projects.length}</p>
          <p>Active</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <p className="text-xl">0</p>
          <p>Overdue</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <p className="text-xl">0</p>
          <p>Done this week</p>
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-8 h-150 mx-12 overflow-y-auto
      scrollbar-thin scrollbar-thumb scrollbar-track">
        {projects.map((proj) => {
          return (
            <ProjectBox key={proj._id} proj={proj} />
          )
        })}
      </div>
    </div>
  )
}

const ProjectBox = ({ proj }) => {
  return (
    <div className="h-50 w-55 bg-[#1F1F1F] rounded-xl text-white flex flex-col items-center justify-around">
      <h1 className="text-2xl">{proj.projName}</h1>
      <p>created: {transformDate(proj.startDate)}</p>
      <p>deadline: {transformDate(proj.endDate)}</p>
    </div>
  )
}

export default ProjectList