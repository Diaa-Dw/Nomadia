import { AdminFilterForm } from '@/components';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { AdminTable, AdminTableHeader, AdminTableLayout } from '@/containers';
import { Filters } from '@/types';
import { Container } from '@mui/material';
import { useCallback, useState } from 'react';
import { CityDialog } from './components';
import { CITY_ACTIONS, CITY_COLUMNS, TITLE } from './constants';
import { useCityMutation, useDeleteCity, useFetchCities } from './hooks';
import { City } from './types';

function CityManagement() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [filters, setFilters] = useState<Filters>({ name: '', searchQuery: '' });

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [cityToDelete, setCityToDelete] = useState<City | null>(null);

  const isEditMode = Boolean(selectedCity);
  const mode = isEditMode ? 'edit' : 'add';

  const { cities, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchCities(filters);

  const { mutateAsync, isPending } = useCityMutation({ mode });
  const { deleteCity, isDeleting } = useDeleteCity(filters);

  const searchOptions = CITY_COLUMNS.filter(col => col.filterable).map(col => ({
    label: col.label,
    value: col.accessor as keyof City,
  }));

  const onFilterChange = (newValue: Filters) => {
    setFilters(newValue);
  };
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

  return (
    <Container maxWidth="xl">
      <AdminTableLayout>
        <AdminTableHeader title={TITLE} onAdd={onAddCity}>
          <AdminFilterForm searchOptions={searchOptions} onFilterChange={onFilterChange} />
        </AdminTableHeader>

        <AdminTable<City>
          columns={CITY_COLUMNS}
          data={cities}
          isLoading={isFetching}
          onRowClick={onRowClick}
          actions={hotel => [
            {
              ...CITY_ACTIONS[0],
              onClick: () => onDeleteRequest(hotel),
              isPending: isDeleting,
            },
          ]}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
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
