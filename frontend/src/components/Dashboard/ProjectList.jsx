const ProjectList = () => {
  return (
    <div className="flex h-full flex-col gap-6 py-8">
      <div className="flex justify-around">
        <div className="flex flex-col items-center text-white">
          <p className="text-xl">7</p>
          <p>Active</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <p className="text-xl">7</p>
          <p>Overdue</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <p className="text-xl">7</p>
          <p>Done this week</p>
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-8 h-150 mx-12 overflow-y-auto
      scrollbar-thin scrollbar-thumb scrollbar-track">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    </div>
  )
}

const ProjectBox = () => {
  return (
    <div className="h-50 w-55 bg-[#1F1F1F] rounded-xl">

    </div>
  )
}

export default ProjectList