import { type RouteObject } from 'react-router-dom';
import {
  Layout,
  PrivateWrapper,
  Home,
  Search,
  Hotel,
  Cart,
  Checkout,
  CityManagement,
  HotelManagement,
  RoomsManagement,
} from './routeImports';

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
