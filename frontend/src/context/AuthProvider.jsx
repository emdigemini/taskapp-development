import { useEffect, useState } from "react";
import authContext from "./authContext";
import axiosInstance from "../lib/axios";

const AuthProvider = ({ children }) => {
  const [ authenticated, setAuthenticated ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const checkAuth = async () => {
      try {
        await axiosInstance.get("/users/me", {withCredentials: true});        
        if(isMounted)setAuthenticated(true);
      } catch (err) {
        if(err.response.status !== 401){
          console.log("Unauthorized error", err);
        }
        if(isMounted)setAuthenticated(false);
      } finally {
        if(isMounted)setLoading(false);
      }
    }
    checkAuth();
    return () => isMounted = false
  }, []);

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated, loading }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider