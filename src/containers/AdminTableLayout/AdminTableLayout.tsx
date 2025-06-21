import { Button, Container, Stack } from '@mui/material';
import { AdminTableLayoutProps, SearchFormBase } from './AdminTableLayout.types';
import { AdminTable, AdminTableHeader } from './components';
import { JSX, memo } from 'react';

function AdminTableLayoutComponet<T extends { id: number }, F extends SearchFormBase>({
  title,
  columns,
  data,
  isFetching,
  isFetchingNextPage,
  fetchNextPage,
  isError,
  onAdd,
  onRowClick,
  onDelete,
  onSearchChange,
  searchValue,
  hasNextPage,
  formikProps,
  searchOptions,
}: AdminTableLayoutProps<T, F>) {
  return (
    <Container maxWidth="xl" sx={{ padding: 3 }}>
      <AdminTableHeader<T, F>
        title={title}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        onAdd={onAdd}
        searchOptions={searchOptions}
        formikProps={formikProps}
      />
      <AdminTable<T>
        columns={columns}
        data={data}
        isLoading={isFetching}
        isError={isError}
        onRowClick={onRowClick}
        onDelete={onDelete}
      />
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

const AdminTableLayout = memo(AdminTableLayoutComponet) as <
  T extends { id: number },
  F extends SearchFormBase,
>(
  props: AdminTableLayoutProps<T, F>
) => JSX.Element;

export default AdminTableLayout;
