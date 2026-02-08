import { useEffect, useState } from "react"
import projectContext from "./projectContext"
import axiosInstance from "../../lib/axios";
import toast from "react-hot-toast";

const ProjectProvider = ({ children }) => {
  const [ projects, setProjects ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const getProjects = async ({ showLoading = false }) => {
    if(showLoading) setLoading(true);
    try {
      const res = await axiosInstance.get("/projects");
      setProjects(res.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Internal server error, try again later")
    } finally {
      if(showLoading) setLoading(false);
    }
  }

  useEffect(() => {
    getProjects({ showLoading: true });
  }, []);

  return (
    <projectContext.Provider value={{ getProjects, projects }}>
      {children}
    </projectContext.Provider>
  )
}

export default ProjectProvider