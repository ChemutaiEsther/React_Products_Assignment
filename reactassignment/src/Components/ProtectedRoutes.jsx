import { Navigate, Outlet } from 'react-router';

function ProtectedRoutes() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;