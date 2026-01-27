import { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../../lib/axios.js";

const Login = () => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const login = async () => {
    if(!username || !password)
      return toast.error("All fields are required!");

    try {
      const res = await axiosInstance.post("/login", { username, password });
      setUsername("");
      setPassword("");
      toast.success("Login successfully.")
    } catch (err) {
      console.log("Error failed to login, please try again", err);
    }
  }

  return (
    <div className="absolute bg-card h-[60%] md:h-125 w-[90%] md:w-150 border border-slightGray rounded-2xl
    flex flex-col gap-8 justify-center items-center backdrop-blur-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col w-[80%] md:w-100 gap-1">
        <label className="text-txt" htmlFor="username">Username:</label>
        <input className="border border-dark-gray rounded-lg py-1 px-2 text-txt" type="text"
        onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>
      <div className="flex flex-col w-[80%] md:w-100 gap-1">
        <label className="text-txt" htmlFor="password">Password:</label>
        <input className="border border-dark-gray rounded-lg py-1 px-2 text-txt" type="password" 
        onChange={(e) => setPassword(e.target.value)} value={password} />
        <a className="text-blue-600 font-semibold" href="">Forgot password?</a>
      </div>
      <button className="text-white font-bold tracking-wider w-[80%] md:w-100 bg-blue p-3 rounded-xl cursor-pointer" onClick={login}>LOG IN</button>
      <a className="text-blue-600 font-semibold" href="/signup"><u>Create account</u></a>
    </div>
  )
}

export default Login