import { type RouteObject } from 'react-router-dom';
import PrivateWrapper from './PrivateWrapper';
import { Layout } from '../containers';

const protectedRoutes: RouteObject = {
  path: '/me',
  element: <PrivateWrapper />,
  children: [
    {
      element: <Layout />,
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
