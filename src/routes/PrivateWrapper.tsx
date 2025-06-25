import { Loader } from '@/containers';
import { selectUser, selectIsAdmin } from '@/features';
import { useVerifyToken } from '@/hooks';
import { useAppSelector } from '@/store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateWrapper = () => {
  const { pathname } = useLocation();
  const { isAuthenticating } = useVerifyToken();
  const { isAuthenticated } = useAppSelector(selectUser);
  const isAdmin = useAppSelector(selectIsAdmin);

  const isAdminRoute = pathname.startsWith('/me/admin');
  const isUserRoute = pathname.startsWith('/me') && !isAdminRoute;

  if (isAuthenticating) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isUserRoute && isAdmin) {
    return <Navigate to="/me/admin/cities" replace />;
  }

  if (isAdminRoute && !isAdmin) {
    return <Navigate to="/me" replace />;
  }

  return <Outlet />;
};

export default PrivateWrapper;
