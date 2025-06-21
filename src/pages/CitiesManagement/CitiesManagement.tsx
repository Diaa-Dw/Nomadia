import { AdminTableLayout } from '@/containers';
import { Container } from '@mui/material';
import { useCallback, useState } from 'react';
import { CityDialog } from './components';
import { CITIES_PER_PAGE, CITY_COLUMNS } from './constants';
import useCitySearchForm from './hooks/useCitySearchForm';
import useFetchCities from './hooks/useFetchCities';
import useCityMutation from './hooks/useMutateCity';
import { City, SearchFormValues } from './types';

function CityManagement() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const isEditMode = Boolean(selectedCity);
  const mode = isEditMode ? 'edit' : 'add';

  const { formikProps, filters } = useCitySearchForm();
  const { cities, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchCities(filters);
  const { mutateAsync, isPending } = useCityMutation({
    mode,
  });

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
        onDelete={() => {}}
        onSearchChange={() => {}}
        searchValue={''}
        rowsPerPage={CITIES_PER_PAGE}
        hasNextPage={hasNextPage}
        formikProps={formikProps}
        searchOptions={searchOptions}
      />

      <CityDialog
        open={openDialog}
        onClose={onClose}
        isLoading={isPending}
        isEditMode={isEditMode}
        selectedCity={selectedCity}
        mutateAsync={mutateAsync}
      />
    </Container>
  );
}

export default CityManagement;
