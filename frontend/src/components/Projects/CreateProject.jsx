import { useContext, useState } from "react";
import axiosInstance from "../../lib/axios"
import toast from "react-hot-toast";
import projectContext from "../../context/Projects/projectContext";

const CreateProject = ({ setCreatingProject }) => {
  const { getProjects } = useContext(projectContext);
  const [ projName, setProjName ] = useState("");
  const [ startDate, setStartDate ] = useState(null);
  const [ endDate, setEndDate ] = useState(null);

  const createProject = async () => {
    try {
      const res = await axiosInstance.post("/projects", { projName, startDate, endDate });
      toast.success(res.data.message);
      setCreatingProject(false);
      getProjects({ showLoading: true });
    } catch (err) {
      console.log(err);
      toast.error(err.respose?.data?.message || "Server failed, please try later");
    }
  }

  return (
    <div className="flex flex-col gap-4 fixed bg-[rgba(241,241,241,0.5)] py-8 px-16 backdrop-blur-xl
    top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-145.5 rounded-2xl">
      <div className="flex flex-col">
        <label htmlFor="name">Project Name</label>
        <input onChange={(e) => setProjName(e.target.value)} id="name" type="text" autoComplete="off"
        className="border border-[#EBEBEB] rounded-md bg-[#1F1F1F] text-white p-2" />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col w-full">
          <label htmlFor="startDate">Start Date</label>
          <input onChange={(e) => setStartDate(e.target.value)} id="startDate" type="date"
          className="border border-[#EBEBEB] rounded-md bg-[#1F1F1F] text-white p-2"  />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="endDate">End Date</label>
          <input onChange={(e) => setEndDate(e.target.value)} id="endDate" type="date"
          className="border border-[#EBEBEB] rounded-md bg-[#1F1F1F] text-white p-2"  />
        </div>
      </div>

      <div className="flex justify-between">
        <button className="bg-[#474747] text-white py-2 w-30 rounded-md cursor-pointer hover:opacity-85"
        onClick={() => setCreatingProject(prev => !prev)} >Cancel</button>
        <button onClick={createProject} className="bg-blue text-white py-2 w-30 rounded-md cursor-pointer hover:opacity-85">Next</button>
      </div>
    </div>
  )
}

export default CreateProject