import { Footer, Header } from '@/components';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.style';
import { SidebarNavigation } from '../NavigationDrawer';
import { useState } from 'react';
import { useAppSelector } from '@/store';
import { selectIsAdmin, selectUser } from '@/features';

const Layout = () => {
  const [openSidebar, setOpenSideebar] = useState(false);
  const { isAuthenticated } = useAppSelector(selectUser);
  const isAdmin = useAppSelector(selectIsAdmin);

  const onOpenSidebar = () => setOpenSideebar(true);
  const onCloseSidebar = () => setOpenSideebar(false);

  return (
    <LayoutContainer>
      <Header onOpenSidebar={onOpenSidebar} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />

      <SidebarNavigation isOpen={openSidebar} onCloseSidebar={onCloseSidebar} isAdmin={isAdmin} />

      <Outlet />

      {isAuthenticated && <Footer />}
    </LayoutContainer>
  );
};

export default Layout;
