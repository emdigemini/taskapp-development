const CreateProject = ({ setCreatingProject }) => {
  return (
    <div className="flex flex-col gap-4 fixed bg-[rgba(241,241,241,0.5)] py-8 px-16 backdrop-blur-xl
    top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-145.5 rounded-2xl">
      <div className="flex flex-col">
        <label htmlFor="name">Project Name</label>
        <input id="name" type="text" 
        className="border border-[#EBEBEB] rounded-md bg-[#1F1F1F] text-white p-2" />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col w-full">
          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" type="date"
          className="border border-[#EBEBEB] rounded-md bg-[#1F1F1F] text-white p-2"  />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="endDate">End Date</label>
          <input id="endDate" type="date"
          className="border border-[#EBEBEB] rounded-md bg-[#1F1F1F] text-white p-2"  />
        </div>
      </div>

      <div className="flex justify-between">
        <button className="bg-[#474747] text-white py-2 w-30 rounded-md cursor-pointer hover:opacity-85"
        onClick={() => setCreatingProject(prev => !prev)} >Cancel</button>
        <button className="bg-blue text-white py-2 w-30 rounded-md cursor-pointer hover:opacity-85">Next</button>
      </div>
    </div>
  )
}

export default CreateProject