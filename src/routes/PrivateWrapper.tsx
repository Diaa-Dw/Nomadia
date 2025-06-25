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

  const isAdminRoute = pathname.startsWith('/admin');
  const isUserRoute = pathname.startsWith('/') && !isAdminRoute;

  if (isAuthenticating) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isUserRoute && isAdmin) {
    return <Navigate to="/admin/cities" replace />;
  }

  if (isAdminRoute && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateWrapper;
