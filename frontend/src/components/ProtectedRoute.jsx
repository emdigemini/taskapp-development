import { useContext } from "react";
import { Navigate } from "react-router-dom";
import authContext from "../context/Auth/authContext";

const ProtectedRoute = ({ children }) => {
  const { authenticated, loading } = useContext(authContext);
  
  if(loading) return null;

  if(!authenticated)
    return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute