import type { RouteObject } from 'react-router-dom';

const publicRoutes: RouteObject = {
  path: '/',
  children: [
    {
      index: true,
      element: <h1>Landing Page</h1>,
    },
    {
      path: 'login',
      element: <h1>Login</h1>,
    },
    {
      path: '*',
      element: <h1>Not Found Page</h1>,
    },
  ],
};

export default publicRoutes;
