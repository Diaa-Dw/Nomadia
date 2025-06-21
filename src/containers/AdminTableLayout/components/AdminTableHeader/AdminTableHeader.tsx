import { Add } from '@mui/icons-material';
import { Button, MenuItem, TextField, Typography } from '@mui/material';
import { AdminTableHeaderProps } from './AdminTableHeader.types';
import { Stack } from './AdminTableHeader.styles';
import { SearchFormBase } from '../../AdminTableLayout.types';

const AdminTableHeader = <T, F extends SearchFormBase>({
  title,
  onAdd,
  searchOptions,
  formikProps,
}: AdminTableHeaderProps<T, F>) => {
  return (
    <Stack>
      <Typography variant={'h5'}>{title}</Typography>
      <Stack>
        <TextField
          select
          size="small"
          name="filterField"
          value={String(formikProps.values.filterField)}
          onChange={formikProps.handleChange}
        >
          {searchOptions.map(option => (
            <MenuItem key={option.label} value={String(option.value)}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          size="small"
          placeholder="Search..."
          name="searchValue"
          value={formikProps.values.searchValue}
          onChange={formikProps.handleChange}
        />

        <Button variant={'contained'} onClick={onAdd} startIcon={<Add />}>
          Create New
        </Button>
      </Stack>
    </Stack>
  );
};

export default AdminTableHeader;
