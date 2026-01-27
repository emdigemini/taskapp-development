import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import axiosInstance from "../../lib/axios.js";

const Login = () => {
  const [ loading, setLoading ] = useState(false);
  const [ showPass, setShowPass ] = useState(false);
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const login = async () => {
    if(loading) return;
    if(!username || !password)
      return toast.error("All fields are required!");

    try {
      setLoading(true);
      const res = await axiosInstance.post("/login", { username, password });
      setUsername("");
      setPassword("");
      toast.success("Login successfully.")
    } catch (err) {
      toast.error(err.response?.data.message || "Server failed, try again later");
      setLoading(false);
    } finally {
      setLoading(false);
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
      <div className="relative flex flex-col w-[80%] md:w-100 gap-1">
        <label className="text-txt" htmlFor="password">Password:</label>
        {showPass 
        ? <FaEye className="absolute top-1/2 right-1.5 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-amber-50" 
        onClick={() => setShowPass(false)}/>
        : <FaEyeSlash className="absolute top-1/2 right-1.5 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-amber-50"
        onClick={() => setShowPass(true)} />}
        <input className="border border-dark-gray rounded-lg py-1 px-2 text-txt" type={showPass ? "text" : "password"} 
        onChange={(e) => setPassword(e.target.value)} value={password} />
        <a className="text-blue-600 font-semibold" href="">Forgot password?</a>
      </div>
      <button className="text-white font-bold tracking-wider w-[80%] md:w-100 bg-blue p-3 rounded-xl 
      cursor-pointer disabled:cursor-wait disabled:opacity-70" onClick={login} disabled={loading} >LOG IN</button>
      <a className="text-blue-600 font-semibold" href="/signup"><u>Create account</u></a>
    </div>
  )
}

export default Login