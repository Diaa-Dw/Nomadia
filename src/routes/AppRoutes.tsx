import { useRoutes } from 'react-router-dom';
import { publicRoutes, protectedRoutes } from './';
import { Suspense } from 'react';
import { Loader } from '../containers';

const AppRoutes = () => {
  const routes = useRoutes([protectedRoutes, publicRoutes]);
  return <Suspense fallback={<Loader />}>{routes}</Suspense>;
};

export default AppRoutes;
