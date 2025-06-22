import { useAdminSearchForm } from '@/hooks';
import useFetchHotels from './hooks/useFetchHotels';
import { Hotel } from './types/HotelsMAnagement.types';
import { HOTEL_COLUMNS, HOTELS_PER_PAGE } from './constants';
import { Container } from '@mui/material';
import { AdminTableLayout } from '@/containers';
import { SearchFormValues } from '@/types';

const HotelsMAnagement = () => {
  const { formikProps, filters } = useAdminSearchForm();
  const { hotels, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchHotels(filters);

  const searchOptions = HOTEL_COLUMNS.filter(col => col.filterable).map(col => ({
    label: col.label,
    value: col.accessor as keyof Hotel,
  }));

  return (
    <Container maxWidth="xl">
      <AdminTableLayout<Hotel, SearchFormValues>
        title="City Management"
        columns={HOTEL_COLUMNS}
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        isError={false}
        data={hotels}
        onAdd={() => {}}
        onRowClick={() => {}}
        onDelete={() => {}}
        onSearchChange={() => {}}
        searchValue={''}
        rowsPerPage={HOTELS_PER_PAGE}
        hasNextPage={hasNextPage}
        formikProps={formikProps}
        searchOptions={searchOptions}
        isDeleting={false}
      />
    </Container>
  );
};

export default HotelsMAnagement;
