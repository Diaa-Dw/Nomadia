import { lazy } from 'react';

export const Layout = lazy(() => import('@/containers/Layout'));

export const Login = lazy(() => import('@/pages/Login'));
export const AccessDenied = lazy(() => import('@/pages/AccessDenied'));
export const NotFoundPage = lazy(() => import('@/pages/NotFound'));

export const Home = lazy(() => import('@/pages/Home'));
export const Search = lazy(() => import('@/pages/Search'));
export const Hotel = lazy(() => import('@/pages/Hotel'));
export const Cart = lazy(() => import('@/pages/Cart'));
export const Checkout = lazy(() => import('@/pages/Checkout'));

export const CityManagement = lazy(() => import('@/pages/CitiesManagement'));
export const HotelManagement = lazy(() => import('@/pages/HotelsMAnagement'));
export const RoomsManagement = lazy(() => import('@/pages/RoomsManagement'));

export const PrivateWrapper = lazy(() => import('./PrivateWrapper'));
