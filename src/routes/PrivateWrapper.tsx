import { getAuthToken } from '../utils';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateWrapper = () => {
  const isAuthenticated = Boolean(getAuthToken());

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateWrapper;
