import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';

const Layout = lazy(() => import('@/containers/Layout'));
const PrivateWrapper = lazy(() => import('@/routes/PrivateWrapper'));
const Home = lazy(() => import('@/pages/Home/Home'));
const Search = lazy(() => import('@/pages/Search/Search'));
const Hotel = lazy(() => import('@/pages/Hotel/Hotel'));
const Cart = lazy(() => import('@/pages/Cart/Cart'));

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
        {
          path: 'cart',
          element: <Cart />,
        },
      ],
    },
  ],
};

export default protectedRoutes;
