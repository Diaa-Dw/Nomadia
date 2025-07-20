import { Add } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Stack } from './AdminTableHeader.styles';
import { AdminTableHeaderProps } from './AdminTableHeader.types';

const AdminTableHeader = ({ title, onAdd, children }: AdminTableHeaderProps) => {
  return (
    <Stack>
      <Typography variant={'h5'}>{title}</Typography>
      <Stack>
        {children}
        <Button variant={'contained'} onClick={onAdd} startIcon={<Add />}>
          Create New
        </Button>
      </Stack>
    </Stack>
  );
};

export default AdminTableHeader;
