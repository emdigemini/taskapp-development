import { useContext } from "react";
import axiosInstance from "../../lib/axios.js";
import { useNavigate } from "react-router-dom";
import authContext from "../../context/authContext.jsx";

const Home = () => {
  const navigate = useNavigate();
  const { setAuthenticated } = useContext(authContext);

  const logout = async () => {
    await axiosInstance.post("/logout", {}, { withCredentials: true });
    setAuthenticated(false);
    navigate("/login");
  }
  return (
    <div>
      <button onClick={logout} className="bg-black py-2 px-4 rounded-xl text-white cursor-pointer">Logout</button>
    </div>
  )
}

export default Home;