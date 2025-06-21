export interface AdminTablePaginationProps {
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  hasNextPage?: boolean;
}
