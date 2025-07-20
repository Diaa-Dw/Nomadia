import { CircularProgress, IconButton, Stack, TableCell, TableRow, Tooltip } from '@mui/material';
import { JSX, memo } from 'react';
import { DataRowProps } from './TableRow.types';

const DataRowComponent = <T,>({ row, columns, onRowClick, actions }: DataRowProps<T>) => (
  <TableRow hover onClick={() => onRowClick(row)} sx={{ cursor: 'pointer' }}>
    {columns.map(col => (
      <TableCell key={col.label} align={col.align || 'left'}>
        {col.render ? col.render(row[col.accessor], row) : String(row[col.accessor])}
      </TableCell>
    ))}
    <TableCell align="right" onClick={e => e.stopPropagation()}>
      <Stack alignItems={'flex-end'}>
        {actions.map(action => (
          <Tooltip key={action.label} title={action.label || ''}>
            <IconButton
              disabled={action.isPending}
              color={action.color}
              onClick={() => action.onClick(row)}
            >
              {action.isPending ? <CircularProgress /> : action.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>
    </TableCell>
  </TableRow>
);

const DataRow = memo(DataRowComponent) as <T>(props: DataRowProps<T>) => JSX.Element;

export default DataRow;
