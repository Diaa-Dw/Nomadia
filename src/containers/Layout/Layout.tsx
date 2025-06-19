import { Header } from '@/components';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.style';
import { SidebarNavigation } from '../NavigationDrawer';
import { useState } from 'react';

const Layout = () => {
  const [openSidebar, setOpenSideebar] = useState(false);

  const onOpenSidebar = () => setOpenSideebar(true);
  const onCloseSidebar = () => setOpenSideebar(false);

  return (
    <LayoutContainer>
      <Header onOpenSidebar={onOpenSidebar} />

      <SidebarNavigation isOpen={openSidebar} onCloseSidebar={onCloseSidebar} />

      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
