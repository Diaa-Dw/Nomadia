import { Button, MenuItem, Stack, TextField } from '@mui/material';
import { Form, FormikProvider } from 'formik';
import { AdminFilterFormProps } from './AdminFilter.types';
import useAdminSearchForm from '@/hooks/useAdminSearchForm';

const AdminFilterForm = <T,>({ searchOptions, onFilterChange }: AdminFilterFormProps<T>) => {
  const formikProps = useAdminSearchForm(onFilterChange);
  const { getFieldProps, handleSubmit } = formikProps;

  return (
    <FormikProvider value={formikProps}>
      <Form onSubmit={handleSubmit}>
        <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
          <TextField select size="small" {...getFieldProps('filterField')}>
            {searchOptions.map(option => (
              <MenuItem key={option.label} value={String(option.value)}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField size="small" placeholder="Search..." {...getFieldProps('searchValue')} />

          <Button variant="outlined" type="submit" sx={{ px: 2 }}>
            Filter
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default AdminFilterForm;
