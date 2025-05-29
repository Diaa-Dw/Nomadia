import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.style';

const Layout = () => {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
