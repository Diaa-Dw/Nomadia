import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';
import PrivateWrapper from './PrivateWrapper';
import Home from '@/pages/Home';

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
          element: <Home />,
        },
      ],
    },
  ],
};

export default protectedRoutes;
