import { Delete } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';
import { JSX, memo } from 'react';
import { DataRowProps } from './TableRow.types';

const DataRowComponent = <T,>({ row, columns, onRowClick, onDelete }: DataRowProps<T>) => (
  <TableRow hover onClick={() => onRowClick(row)} sx={{ cursor: 'pointer' }}>
    {columns.map(col => (
      <TableCell key={col.label} align={col.align || 'left'}>
        {col.render ? col.render(col.accessor, row) : String(row[col.accessor])}
      </TableCell>
    ))}
    <TableCell align="right" onClick={e => e.stopPropagation()}>
      <IconButton color="error" onClick={() => onDelete(row)}>
        <Delete />
      </IconButton>
    </TableCell>
  </TableRow>
);

const DataRow = memo(DataRowComponent) as <T>(props: DataRowProps<T>) => JSX.Element;

export default DataRow;
