import { AdminTableLayout } from '@/containers';
import { Container } from '@mui/material';
import useFetchCities from './hooks/useFetchCities';
import useCitySearchForm from './hooks/useCitySearchForm';
import { CITIES_PER_PAGE, CITY_COLUMNS } from './constants';
import { City, SearchFormValues } from './types';

export const CityManagement = () => {
  const { formikProps, filters } = useCitySearchForm();

  const { cities, isFetching, onPageChange, hasNextPage } = useFetchCities(filters);

  const searchOptions = CITY_COLUMNS.filter(col => col.filterable).map(col => ({
    label: col.label,
    value: col.accessor as keyof City,
  }));

  return (
    <Container maxWidth="xl">
      <AdminTableLayout<City, SearchFormValues>
        title="City Management"
        columns={CITY_COLUMNS}
        isLoading={isFetching}
        isError={false}
        data={cities}
        onAdd={() => console.log('Open Add City Dialog')}
        onRowClick={city => console.log('Open Edit City Dialog', city)}
        onDelete={() => {}}
        onSearchChange={() => {}}
        searchValue={''}
        rowsPerPage={CITIES_PER_PAGE}
        page={1}
        onPageChange={onPageChange}
        hasNextPage={hasNextPage}
        formikProps={formikProps}
        searchOptions={searchOptions}
      />
    </Container>
  );
};
