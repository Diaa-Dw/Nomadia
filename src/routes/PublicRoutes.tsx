import type { RouteObject } from 'react-router-dom';
import { Layout, Login, LoginRequired, AccessDenied, NotFoundPage } from './routeImports';

const publicRoutes: RouteObject = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'login-required',
      element: <LoginRequired />,
    },
    {
      path: 'access-denied',
      element: <AccessDenied />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
};

export default publicRoutes;
