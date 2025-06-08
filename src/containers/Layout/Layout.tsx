import { Header } from '@/components';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.style';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />

      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
