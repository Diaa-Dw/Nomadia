import { Pagination, Stack, Typography } from '@mui/material';
import { AdminTablePaginationProps } from './AdminTablePagination.types';

const AdminTablePagination = ({
  page,
  rowsPerPage,
  total,
  onPageChange,
}: AdminTablePaginationProps) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
    <Typography variant="body2">
      Showing {Math.min((page - 1) * rowsPerPage + 1, total)} to{' '}
      {Math.min(page * rowsPerPage, total)} of {total} results
    </Typography>
    <Pagination
      page={page}
      count={Math.ceil(total / rowsPerPage)}
      onChange={(_, value) => onPageChange(value)}
    />
  </Stack>
);

export default AdminTablePagination;
