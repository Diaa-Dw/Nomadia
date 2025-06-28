import { selectUser, selectIsAdmin } from '@/features';
import { useAppSelector } from '@/store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateWrapper = () => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAppSelector(selectUser);
  const isAdmin = useAppSelector(selectIsAdmin);

  const isAdminRoute = pathname.startsWith('/admin');
  const isUserRoute = pathname.startsWith('/') && !isAdminRoute;

  if (!isAuthenticated) {
    return <Navigate to="/unauthorized" replace />;
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
