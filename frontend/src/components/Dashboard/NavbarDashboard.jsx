import { LuSearch } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiArchive } from "react-icons/fi";
import { RiTeamLine } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";

const NavbarDashboard = () => {
  return (
    <div className="flex justify-between py-8 px-12 ">
      <div className="flex gap-2 items-center w-105 bg-[#3B3B3B] py-3 px-5 rounded-xl">
        <input className="text-white focus:outline-0 w-full"
        type="text" placeholder="Search projects/tasks" />
        <LuSearch className="text-white" size={24} />
      </div>
      <div className="flex gap-12 px-10 rounded-xl items-center bg-black">
        <FaRegTrashAlt className="text-white cursor-pointer hover:opacity-85" size={23} />
        <FiArchive className="text-white cursor-pointer hover:opacity-85" size={23} />
        <RiTeamLine className="text-white cursor-pointer hover:opacity-85" size={23} />
        <FaCirclePlus className="text-white cursor-pointer hover:opacity-85" size={23} />
      </div>
    </div>
  )
}

export default NavbarDashboard