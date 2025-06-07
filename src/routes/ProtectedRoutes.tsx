import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';
import PrivateWrapper from './PrivateWrapper';

const Layout = lazy(() => import('@/containers/Layout'));

const protectedRoutes: RouteObject = {
  path: '/me',
  element: <Layout />,
  children: [
    {
      element: <PrivateWrapper />,
      children: [
        {
          index: true,
          element: <h1>Home Page</h1>,
        },
      ],
    },
  ],
};

export default protectedRoutes;
