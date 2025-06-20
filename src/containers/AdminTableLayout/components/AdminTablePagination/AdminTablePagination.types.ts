export interface AdminTablePaginationProps {
  page: number;
  rowsPerPage: number;
  total: number;
  onPageChange: (page: number) => void;
}
