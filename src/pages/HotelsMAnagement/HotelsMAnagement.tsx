import { AdminFilterForm } from '@/components';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { AdminTable, AdminTableHeader, AdminTableLayout } from '@/containers';
import { Filters } from '@/types';
import { Container } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { HotelDialog } from './components/HotelDialog';
import { HOTEL_ACTIONS, HOTEL_COLUMNS, TITLE } from './constants';
import { useDeleteHotel, useFetchHotels } from './hooks';
import { Hotel } from './types';

const HotelsMAnagement = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [hotelToDelete, setHotelToDelete] = useState<Hotel | null>(null);
  const [filters, setFilters] = useState<Filters>({ name: '', searchQuery: '' });
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [confirmOpen, setConfirmOpen] = useState(false);

  const { hotels, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchHotels(filters);

  const { deleteHotel } = useDeleteHotel(filters, setDeletingId);

  const isEditMode = Boolean(selectedHotel);
  const searchOptions = HOTEL_COLUMNS.filter(col => col.filterable).map(col => ({
    label: col.label,
    value: col.accessor as keyof Hotel,
  }));

  const onFilterChange = (newValue: Filters) => {
    setFilters(newValue);
  };
  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  const onDeleteRequest = (hotel: Hotel) => {
    setHotelToDelete(hotel);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (hotelToDelete) {
      setDeletingId(hotelToDelete.id);
      deleteHotel(hotelToDelete.id);
      setConfirmOpen(false);
      setHotelToDelete(null);
    }
  };

  const handleCloseConfirm = () => {
    setConfirmOpen(false);
    setHotelToDelete(null);
  };

  const onAddHotel = () => {
    setOpenDialog(true);
    setSelectedHotel(null);
  };
  const onRowClick = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setOpenDialog(true);
  };

  const memoizedHotels = useMemo(() => hotels, [hotels]);

  const buildHotelActions = useCallback(
    (hotel: Hotel) => [
      {
        ...HOTEL_ACTIONS[0],
        onClick: () => onDeleteRequest(hotel),
        isPending: deletingId === hotel.id,
      },
    ],
    [deletingId]
  );

  return (
    <Container maxWidth="xl">
      <AdminTableLayout>
        <AdminTableHeader title={TITLE} onAdd={onAddHotel}>
          <AdminFilterForm searchOptions={searchOptions} onFilterChange={onFilterChange} />
        </AdminTableHeader>

        <AdminTable<Hotel>
          columns={HOTEL_COLUMNS}
          data={memoizedHotels}
          isLoading={isFetching && !hotels.length}
          onRowClick={onRowClick}
          actions={buildHotelActions}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      </AdminTableLayout>
      <HotelDialog
        open={openDialog}
        onClose={onCloseDialog}
        isEditMode={isEditMode}
        selectedHotel={selectedHotel}
      />

      <ConfirmDialog
        open={confirmOpen}
        title="Confirm Deletion"
        description={`Are you sure you want to delete "${hotelToDelete?.name}"?`}
        onClose={handleCloseConfirm}
        onConfirm={handleConfirmDelete}
        confirmText="Delete"
        confirmColor="error"
      />
    </Container>
  );
};

export default HotelsMAnagement;
