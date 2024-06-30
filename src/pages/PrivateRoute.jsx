import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { node } from "react-proptypes";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return <div>{children}</div>;
  }

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: node,
};
