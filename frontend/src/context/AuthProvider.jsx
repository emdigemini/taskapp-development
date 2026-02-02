import { useEffect, useState } from "react";
import authContext from "./authContext";
import axiosInstance from "../lib/axios";

const AuthProvider = ({ children }) => {
  const [ authenticated, setAuthenticated ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  const checkAuth = async ({ showLoading = false }) => {
    if(showLoading) setLoading(true);
    try {
      await axiosInstance.get("/users/me", {withCredentials: true});        
      setAuthenticated(true);
    } catch (err) {
      if(err.response?.status !== 401){
        console.log("Unauthorized error", err);
      }
      setAuthenticated(false);
    } finally {
      if(showLoading) setLoading(false);
    }
  }

  useEffect(() => {
    checkAuth({ showLoading: true });
  }, []);

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated, loading, checkAuth }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider