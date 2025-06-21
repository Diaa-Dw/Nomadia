import { AdminTableLayout } from '@/containers';
import { Container } from '@mui/material';
import { useCallback, useState } from 'react';
import { CityDialog } from './components';
import { CITIES_PER_PAGE, CITY_COLUMNS } from './constants';
import useCitySearchForm from './hooks/useCitySearchForm';
import useFetchCities from './hooks/useFetchCities';
import useCityMutation from './hooks/useMutateCity';
import useDeleteCity from './hooks/useDeleteCity';
import { City, SearchFormValues } from './types';
import { ConfirmDialog } from '@/components/ConfirmDialog';

function CityManagement() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [cityToDelete, setCityToDelete] = useState<City | null>(null);

  const isEditMode = Boolean(selectedCity);
  const mode = isEditMode ? 'edit' : 'add';

  const { formikProps, filters } = useCitySearchForm();
  const { cities, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchCities(filters);

  const { mutateAsync, isPending } = useCityMutation({ mode });
  const { deleteCity, isDeleting } = useDeleteCity(filters);

  const searchOptions = CITY_COLUMNS.filter(col => col.filterable).map(col => ({
    label: col.label,
    value: col.accessor as keyof City,
  }));

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
      <AdminTableLayout<City, SearchFormValues>
        title="City Management"
        columns={CITY_COLUMNS}
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        isError={false}
        data={cities}
        onAdd={onAddCity}
        onRowClick={onRowClick}
        onDelete={onDeleteRequest}
        onSearchChange={() => {}}
        searchValue={''}
        rowsPerPage={CITIES_PER_PAGE}
        hasNextPage={hasNextPage}
        formikProps={formikProps}
        searchOptions={searchOptions}
        isDeleting={isDeleting}
      />

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
