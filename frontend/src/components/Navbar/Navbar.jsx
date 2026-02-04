import { Outlet, Link } from "react-router-dom"
import { useContext, useState } from "react"
import authContext from "../../context/authContext";
import axiosInstance from "../../lib/axios.js";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineProject } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { checkAuth } = useContext(authContext);
  const [ sideBar, setSideBar ] = useState(true);

  const links = [
    { path: "/dashboard", name: "Dashboard", icon: <LuLayoutDashboard /> },
    { path: "/projects", name: "Projects", icon: <AiOutlineProject /> },
    { path: "/team", name: "Manage Team", icon: <RiTeamLine /> },
    { path: "/messages", name: "Messages", icon: <FaRegMessage /> },
    { path: "/profile", name: "Profile", icon: <CgProfile /> },
  ]

  const toggleSideBar = () => setSideBar(!sideBar);

  const logout = async () => {
    await axiosInstance.post("/logout", {}, {withCredentials: true});
    checkAuth({showLoading: true});
  }

  return (
    <div className="flex w-full">
      <aside
        className={`
          relative top-0 left-0 min-h-screen flex flex-col items-center py-16 justify-between
          bg-linear-to-r from-[#262626] to-[#171717]
          shadow-[4px_0px_4px_rgba(0,0,0,0.25)]
          transform transition-[width] duration-300 ease-in-out
          ${sideBar ? "w-16" : "w-60"}
        `}
      >
        <BsLayoutSidebarInset
          className="absolute cursor-e-resize text-white text-2xl top-4 right-4"
          onClick={toggleSideBar}
        />

        <nav className="flex flex-col gap-4 items-center w-full">
          {links.map(({ path, name, icon }) => (
            <Link
              key={path}
              to={path}
              className={`
                flex items-center gap-2 font-bold text-white
                p-3 rounded-xl cursor-pointer
                hover:bg-hblue transition-all duration-150
                w-full ${sideBar ? "justify-center" : ""}
              `}
            >
              {icon}
              {!sideBar && <span className="transition-opacity duration-300">{name}</span>}
            </Link>
          ))}
        </nav>

        <button
          onClick={logout}
          className={`
            flex items-center gap-2 font-bold text-white
            p-3 rounded-xl cursor-pointer
            hover:bg-hblue transition-all duration-150
            w-full ${sideBar ? "justify-center" : ""}
          `}
        >
          <CiLogout />
          {!sideBar && <span className="transition-opacity duration-300">LOGOUT</span>}
        </button>
      </aside>

      <Outlet />
    </div>
  )
}

export default Navbar