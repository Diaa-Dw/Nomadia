import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';
import PrivateWrapper from './PrivateWrapper';

const Layout = lazy(() => import('@/containers/Layout'));
const Home = lazy(() => import('@/pages/Home/Home'));
const Search = lazy(() => import('@/pages/Search/Search'));
const Hotel = lazy(() => import('@/pages/Hotel/Hotel'));

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
        {
          path: 'search',
          element: <Search />,
        },
        {
          path: 'hotels/:hotelId',
          element: <Hotel />,
        },
      ],
    },
  ],
};

export default protectedRoutes;
