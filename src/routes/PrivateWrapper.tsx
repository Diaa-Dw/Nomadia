import { Navigate, Outlet } from 'react-router-dom';

const PrivateWrapper = () => {
  const isAuthenticated = Boolean(localStorage.getItem('token'));

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateWrapper;
