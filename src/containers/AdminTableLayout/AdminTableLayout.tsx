import { Container } from '@mui/material';
import { AdminTableLayoutProps } from './AdminTableLayout.types';

function AdminTableLayout({ children }: AdminTableLayoutProps) {
  return (
    <Container maxWidth="xl" sx={{ padding: 3 }}>
      {children}
    </Container>
  );
}

export default AdminTableLayout;
