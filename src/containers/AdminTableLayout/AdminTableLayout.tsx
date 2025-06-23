import { Button, Container, Stack } from '@mui/material';
import { AdminTableLayoutProps } from './AdminTableLayout.types';

function AdminTableLayout({
  isFetchingNextPage,
  fetchNextPage,
  hasNextPage,
  children,
}: AdminTableLayoutProps) {
  return (
    <Container maxWidth="xl" sx={{ padding: 3 }}>
      {children}

      {hasNextPage && fetchNextPage && (
        <Stack direction="row" justifyContent="center" mt={2}>
          <Button variant="outlined" onClick={fetchNextPage} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </Button>
        </Stack>
      )}
    </Container>
  );
}

export default AdminTableLayout;
