import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Layout = lazy(() => import('@/containers/Layout'));
const Login = lazy(() => import('@/pages/Login'));
const Unauthorized = lazy(() => import('@/pages/Unauthenticated'));

const publicRoutes: RouteObject = {
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <h1>Landing Page</h1>,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'unauthorized',
      element: <Unauthorized />,
    },
    {
      path: '*',
      element: <h1>Not Found Page</h1>,
    },
  ],
};

export default publicRoutes;
