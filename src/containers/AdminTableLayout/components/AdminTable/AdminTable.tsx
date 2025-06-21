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

function AdminTable<T extends { id: number; roomId: number }>({
  columns,
  data,
  isLoading,
  isError,
  onRowClick,
  onDelete,
}: AdminTableProps<T>) {
  const colSpan = columns.length + 1;

  return (
    <TableContainer component={Paper}>
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
            data.map(row => (
              <DataRow row={row} columns={columns} onRowClick={onRowClick} onDelete={onDelete} />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminTable;
