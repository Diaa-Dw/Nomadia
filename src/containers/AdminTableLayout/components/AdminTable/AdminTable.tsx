import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { DataRow } from '../TableRow';
import { AdminTableProps } from './AdminTable.types';

function AdminTable<T extends { id: number }>({
  columns,
  data,
  isLoading,
  isError,
  onRowClick,
  onDelete,
  isDeleting,
}: AdminTableProps<T>) {
  const colSpan = columns.length + 1;

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '70vh' }}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col.label} align={col.align || 'left'}>
                {col.label}
              </TableCell>
            ))}
            {<TableCell align="right">Actions</TableCell>}
          </TableRow>
        </TableHead>

        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={colSpan} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : isError || !data.length ? (
            <TableRow>
              <TableCell colSpan={colSpan} align="center">
                No data found.
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, idx) => (
              <DataRow
                key={row.id ?? idx}
                row={row}
                columns={columns}
                onRowClick={onRowClick}
                onDelete={onDelete}
                isDeleting={isDeleting}
              />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminTable;
