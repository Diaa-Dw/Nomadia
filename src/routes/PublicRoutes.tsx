import type { RouteObject } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Layout } from '../containers';

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
      path: '*',
      element: <h1>Not Found Page</h1>,
    },
  ],
};

export default publicRoutes;
