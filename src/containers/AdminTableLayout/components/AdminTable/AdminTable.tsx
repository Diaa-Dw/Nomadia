import { Delete } from '@mui/icons-material';
import {
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { AdminTableProps } from './AdminTable.types';

const AdminTable = <T,>({
  columns,
  data,
  isLoading,
  isError,
  onRowClick,
  onDelete,
}: AdminTableProps<T>) => {
  const colSpan = columns.length + (onDelete ? 1 : 0);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 70 }}>
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col.label} align={col.align || 'left'}>
                {col.label}
              </TableCell>
            ))}
            {onDelete && <TableCell align="right">Actions</TableCell>}
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
              <TableRow
                key={idx}
                hover
                onClick={() => onRowClick?.(row)}
                sx={{ cursor: onRowClick ? 'pointer' : 'default' }}
              >
                {columns.map(col => {
                  const rawValue = row[col.accessor];
                  const content = col.render ? col.render(rawValue, row) : String(rawValue ?? '');

                  return (
                    <TableCell key={col.label} align={col.align || 'left'}>
                      {content}
                    </TableCell>
                  );
                })}
                {onDelete && (
                  <TableCell align="right" onClick={e => e.stopPropagation()}>
                    <IconButton color="error" onClick={() => onDelete(row)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
