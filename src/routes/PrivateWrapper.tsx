import { Loader } from '@/containers';
import { selectUser } from '@/features';
import useVerifyToken from '@/hooks/userVerifyToken';
import { useAppSelector } from '@/store';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateWrapper = () => {
  const { isAuthenticating } = useVerifyToken();
  const { isAuthenticated } = useAppSelector(selectUser);

  if (isAuthenticating) return <Loader />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export default PrivateWrapper;
