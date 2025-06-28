import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';

const Layout = lazy(() => import('@/containers/Layout'));
const PrivateWrapper = lazy(() => import('@/routes/PrivateWrapper'));
const Home = lazy(() => import('@/pages/Home/Home'));
const Search = lazy(() => import('@/pages/Search/Search'));
const Hotel = lazy(() => import('@/pages/Hotel/Hotel'));
const Cart = lazy(() => import('@/pages/Cart/Cart'));
const Checkout = lazy(() => import('@/pages/Checkout/Checkout'));
const CityManagement = lazy(() => import('@/pages/CitiesManagement/CitiesManagement'));
const HotelManagement = lazy(() => import('@/pages/HotelsMAnagement/HotelsMAnagement'));
const RoomsManagement = lazy(() => import('@/pages/RoomsManagement/RoomsManagement'));

const protectedRoutes: RouteObject = {
  path: '/',
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
        {
          path: 'checkout/:roomId',
          element: <Checkout />,
        },
        {
          path: 'admin/cities',
          element: <CityManagement />,
        },
        {
          path: 'admin/hotels',
          element: <HotelManagement />,
        },
        {
          path: 'admin/rooms',
          element: <RoomsManagement />,
        },
      ],
    },
  ],
};

export default protectedRoutes;
