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
import { memo } from 'react';
import { DataRow } from '../TableRow';
import { AdminTableProps } from './AdminTable.types';
import { JSX } from 'react';

function AdminTableComponent<T extends { id?: number; roomId?: number }>({
  columns,
  data,
  isLoading,
  onRowClick,
  actions,
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
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={colSpan} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : !data.length ? (
            <TableRow>
              <TableCell colSpan={colSpan} align="center">
                No data found.
              </TableCell>
            </TableRow>
          ) : (
            data.map(row => (
              <DataRow<T>
                key={row.id ?? row.roomId}
                row={row}
                columns={columns}
                onRowClick={onRowClick}
                actions={actions ? actions(row) : []}
              />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const AdminTable = memo(AdminTableComponent) as <T extends { id?: number; roomId?: number }>(
  props: AdminTableProps<T>
) => JSX.Element;

export default AdminTable;
