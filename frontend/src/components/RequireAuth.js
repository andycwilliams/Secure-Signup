// React Imports
import { Navigate, Outlet, useLocation } from "react-router-dom";
// Hooks Imports
import useAuth from "../hooks/useAuth";
// Dependency Imports
import { jwtDecode } from "jwt-decode";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;

  const roles = decoded?.UserInfo?.roles || [];

  return roles.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
