import { ConfirmDialog } from '@/components/ConfirmDialog';
import { AdminTableLayout } from '@/containers';
import { AdminTable, AdminTableHeader } from '@/containers/AdminTableLayout';
import { useAdminSearchForm } from '@/hooks';
import { Delete } from '@mui/icons-material';
import { Container, MenuItem, TextField } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { CityDialog } from './components';
import { CITY_COLUMNS, TITLE } from './constants';
import useDeleteCity from './hooks/useDeleteCity';
import useFetchCities from './hooks/useFetchCities';
import useCityMutation from './hooks/useMutateCity';
import { City } from './types';

function CityManagement() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [cityToDelete, setCityToDelete] = useState<City | null>(null);

  const isEditMode = Boolean(selectedCity);
  const mode = isEditMode ? 'edit' : 'add';

  const { formikProps, filters } = useAdminSearchForm();
  const { cities, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchCities(filters);

  const { mutateAsync, isPending } = useCityMutation({ mode });
  const { deleteCity, isDeleting } = useDeleteCity(filters);

  const searchOptions = CITY_COLUMNS.filter(col => col.filterable).map(col => ({
    label: col.label,
    value: col.accessor as keyof City,
  }));

  const { values, handleChange } = formikProps;
  const onClose = () => {
    setSelectedCity(null);
    setOpenDialog(false);
  };
  const onAddCity = useCallback(() => setOpenDialog(true), []);
  const onRowClick = useCallback((city: City) => {
    setSelectedCity(city);
    setOpenDialog(true);
  }, []);

  const onDeleteRequest = (city: City) => {
    setCityToDelete(city);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (cityToDelete) {
      deleteCity(cityToDelete.id);
      setConfirmOpen(false);
      setCityToDelete(null);
    }
  };

  const handleCloseConfirm = () => {
    setConfirmOpen(false);
    setCityToDelete(null);
  };

  const actions = useMemo(() => {
    return [
      {
        label: 'Delete City',
        icon: <Delete />,
        onClick: onDeleteRequest,
        isPending: isDeleting,
        color: 'error' as const,
      },
    ];
  }, [isDeleting]);

  return (
    <Container maxWidth="xl">
      <AdminTableLayout
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      >
        <AdminTableHeader title={TITLE} onAdd={onAddCity}>
          <TextField
            select
            size="small"
            name="filterField"
            value={String(values.filterField)}
            onChange={handleChange}
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
            value={values.searchValue}
            onChange={handleChange}
          />
        </AdminTableHeader>

        <AdminTable<City>
          columns={CITY_COLUMNS}
          data={cities}
          isLoading={isFetching}
          onRowClick={onRowClick}
          actions={actions}
        />
      </AdminTableLayout>

      <CityDialog
        open={openDialog}
        onClose={onClose}
        isLoading={isPending}
        isEditMode={isEditMode}
        selectedCity={selectedCity}
        mutateAsync={mutateAsync}
      />

      <ConfirmDialog
        open={confirmOpen}
        title="Confirm Deletion"
        description={`Are you sure you want to delete "${cityToDelete?.name}"?`}
        onClose={handleCloseConfirm}
        onConfirm={handleConfirmDelete}
        confirmText="Delete"
        confirmColor="error"
      />
    </Container>
  );
}

export default CityManagement;
