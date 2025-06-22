import { useAdminSearchForm } from '@/hooks';
import useFetchHotels from './hooks/useFetchHotels';
import { Hotel } from './types/HotelsMAnagement.types';
import { HOTEL_COLUMNS, HOTELS_PER_PAGE } from './constants';
import { Container } from '@mui/material';
import { AdminTableLayout } from '@/containers';
import { SearchFormValues } from '@/types';
import { HotelDialog } from './components/HotelDialog';
import { useState } from 'react';

const HotelsMAnagement = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const { formikProps, filters } = useAdminSearchForm();
  const { hotels, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchHotels(filters);

  const isEditMode = Boolean(selectedHotel);
  const searchOptions = HOTEL_COLUMNS.filter(col => col.filterable).map(col => ({
    label: col.label,
    value: col.accessor as keyof Hotel,
  }));

  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  const onAddHotel = () => {
    setOpenDialog(true);
    setSelectedHotel(null);
  };
  const onRowClick = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setOpenDialog(true);
  };
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
        onAdd={onAddHotel}
        onRowClick={onRowClick}
        onDelete={() => {}}
        onSearchChange={() => {}}
        searchValue={''}
        rowsPerPage={HOTELS_PER_PAGE}
        hasNextPage={hasNextPage}
        formikProps={formikProps}
        searchOptions={searchOptions}
        isDeleting={false}
      />

      <HotelDialog
        open={openDialog}
        onClose={onCloseDialog}
        isEditMode={isEditMode}
        selectedHotel={selectedHotel}
      />
    </Container>
  );
};

export default HotelsMAnagement;
