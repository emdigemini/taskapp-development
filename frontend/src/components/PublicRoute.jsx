import { useContext } from "react";
import { Navigate } from "react-router-dom";
import authContext from "../context/authContext.jsx";

const PublicRoute = ({ children }) => {
  const { authenticated, loading } = useContext(authContext);

  if(loading) return null;

  if(authenticated)
    return <Navigate to="/home" replace />

  return children;
}

export default PublicRoute