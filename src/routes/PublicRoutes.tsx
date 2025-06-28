import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Layout = lazy(() => import('@/containers/Layout'));
const Login = lazy(() => import('@/pages/Login'));
const Unauthorized = lazy(() => import('@/pages/Unauthenticated'));
const AccessDenied = lazy(() => import('@/pages/AccessDenied'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFound'));

const publicRoutes: RouteObject = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'unauthorized',
      element: <Unauthorized />,
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
