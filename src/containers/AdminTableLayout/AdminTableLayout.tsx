import { Container } from '@mui/material';
import { AdminTableLayoutProps } from './AdminTableLayout.types';
import { AdminTable, AdminTableHeader, AdminTablePagination } from './components';

const AdminTableLayout = <T,>({
  title,
  columns,
  queryResult,
  onAdd,
  onRowClick,
  onDelete,
  page,
  rowsPerPage,
  onPageChange,
  onSearchChange,
  searchValue,
}: AdminTableLayoutProps<T>) => {
  const { data, isLoading, isError } = queryResult;

  return (
    <Container maxWidth="xl" sx={{ padding: 3 }}>
      <AdminTableHeader
        title={title}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        onAdd={onAdd}
      />
      <AdminTable
        columns={columns}
        data={data?.data || []}
        isLoading={isLoading}
        isError={isError}
        onRowClick={onRowClick}
        onDelete={onDelete}
      />

      <AdminTablePagination
        page={page}
        rowsPerPage={rowsPerPage}
        total={data?.total || 0}
        onPageChange={onPageChange}
      />
    </Container>
  );
};

export default AdminTableLayout;
