import { useState } from "react";
import axiosInstance from "../../lib/axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [ email, setEmail ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");

  const signup = async () => {
    if(!email || !username || !password || !confirmPassword)
      return toast.error("All fields are required");

    if(password !== confirmPassword)
      return toast.error("Passwords do not match")

    try {
      const res = await axiosInstance.post("/signup", { email, username, password, confirmPassword }); 
      toast.success("Account created successfully!")
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword(""); 
    } catch (err) {
      toast.error(err.response?.data?.message || "Server failed, please try later");
    }
  }

  return (
    <div className="absolute bg-card h-[75%] md:h-150 w-[90%] md:w-150 border border-slightGray rounded-2xl
    flex flex-col gap-8 justify-center items-center backdrop-blur-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col w-[80%] md:w-100 gap-1">
        <label className="text-txt" htmlFor="username">Email:</label>
        <input className="border border-dark-gray rounded-lg py-1 px-2 text-txt" type="email" 
        value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>  
      <div className="flex flex-col w-[80%] md:w-100 gap-1">
        <label className="text-txt" htmlFor="username">Create Username:</label>
        <input className="border border-dark-gray rounded-lg py-1 px-2 text-txt" type="text" 
        value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="flex flex-col w-[80%] md:w-100 gap-1">
        <label className="text-txt" htmlFor="password">Create Password:</label>
        <input className="border border-dark-gray rounded-lg py-1 px-2 text-txt" type="password" 
        value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="flex flex-col w-[80%] md:w-100 gap-1">
        <label className="text-txt" htmlFor="password">Confirm Password:</label>
        <input className="border border-dark-gray rounded-lg py-1 px-2 text-txt" type="password" 
        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button className="text-white font-bold tracking-wider w-[80%] md:w-100 bg-blue p-3 rounded-xl cursor-pointer" onClick={signup}>SIGN UP</button>
      <a className="text-blue-600 font-semibold" href="/"><u>Have an account?</u></a>
    </div>
  )
}

export default SignUp