import { Navigate, Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  return isLoggedIn === "true" ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
