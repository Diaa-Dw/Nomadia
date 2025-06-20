import { Add } from '@mui/icons-material';
import { Button, TextField, Typography } from '@mui/material';
import { AdminTableHeaderProps } from './AdminTableHeader.types';
import { Stack } from './AdminTableHeader.styles';

const AdminTableHeader = ({ title, searchValue, onSearchChange, onAdd }: AdminTableHeaderProps) => {
  return (
    <Stack>
      <Typography variant={'h5'}>{title}</Typography>
      <Stack>
        <TextField
          placeholder="Search..."
          size="small"
          value={searchValue}
          onChange={e => onSearchChange(e.target.value)}
        />
        <Button variant={'contained'} onClick={onAdd} startIcon={<Add />}>
          Create New
        </Button>
      </Stack>
    </Stack>
  );
};

export default AdminTableHeader;
