import { Pagination, Stack } from '@mui/material';
import { AdminTablePaginationProps } from './AdminTablePagination.types';

const AdminTablePagination = ({ page, onPageChange, hasNextPage }: AdminTablePaginationProps) => {
  return (
    <Stack direction="row" justifyContent="flex-end" alignItems="center" mt={2}>
      <Pagination
        page={page}
        count={hasNextPage === false ? page : page + 1}
        onChange={(_, value) => onPageChange(value)}
      />
    </Stack>
  );
};

export default AdminTablePagination;
