import { Container } from '@mui/material';
import { AdminTableLayoutProps, SearchFormBase } from './AdminTableLayout.types';
import { AdminTable, AdminTableHeader, AdminTablePagination } from './components';

const AdminTableLayout = <T, F extends SearchFormBase>({
  title,
  columns,
  data,
  isLoading,
  isError,
  onAdd,
  onRowClick,
  onDelete,
  page,
  rowsPerPage,
  onPageChange,
  onSearchChange,
  searchValue,
  hasNextPage,
  formikProps,
  searchOptions,
}: AdminTableLayoutProps<T, F>) => {
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
        isLoading={isLoading}
        isError={isError}
        onRowClick={onRowClick}
        onDelete={onDelete}
      />

      <AdminTablePagination
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={onPageChange}
        hasNextPage={hasNextPage}
      />
    </Container>
  );
};

export default AdminTableLayout;
