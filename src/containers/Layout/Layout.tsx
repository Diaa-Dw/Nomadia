import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.style';
import { Header } from '@/components';
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />

      <Container>
        <Outlet />
      </Container>
    </LayoutContainer>
  );
};

export default Layout;
