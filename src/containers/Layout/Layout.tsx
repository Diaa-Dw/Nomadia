import { Loader } from '@/containers';
import { selectIsAdmin, selectUser } from '@/features';
import { useVerifyToken, usePageTitle } from '@/hooks';
import { useAppSelector } from '@/store';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SidebarNavigation } from '../NavigationDrawer';
import { LayoutContainer } from './Layout.style';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PUBLIC_ROUTES } from './constants/Layout.constants';

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { pathname } = useLocation();
  const { isAuthenticating } = useVerifyToken();
  const { isAuthenticated } = useAppSelector(selectUser);
  const isAdmin = useAppSelector(selectIsAdmin);

  usePageTitle();

  const onOpenSidebar = () => setOpenSidebar(true);
  const onCloseSidebar = () => setOpenSidebar(false);

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  if (isAuthenticating) {
    return <Loader />;
  }

  return (
    <LayoutContainer>
      <Header onOpenSidebar={onOpenSidebar} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />

      {isAuthenticated && (
        <SidebarNavigation isOpen={openSidebar} onCloseSidebar={onCloseSidebar} isAdmin={isAdmin} />
      )}

      <Outlet />

      {isAuthenticated && !isAuthenticating && !isPublicRoute && <Footer />}
    </LayoutContainer>
  );
};

export default Layout;
