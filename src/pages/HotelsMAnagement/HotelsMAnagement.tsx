import { useAdminSearchForm } from '@/hooks';
import useFetchHotels from './hooks/useFetchHotels';
import { Hotel } from './types/HotelsMAnagement.types';
import { HOTEL_COLUMNS, HOTELS_PER_PAGE } from './constants';
import { Container } from '@mui/material';
import { AdminTableLayout } from '@/containers';
import { SearchFormValues } from '@/types';
import { HotelDialog } from './components/HotelDialog';
import { useMemo, useState } from 'react';
import useDeleteHotel from './hooks/useDeleteHotel';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { Delete, KingBedRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HotelsMAnagement = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [hotelToDelete, setHotelToDelete] = useState<Hotel | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const { formikProps, filters } = useAdminSearchForm();
  const { hotels, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchHotels(filters);

  const { deleteHotel, isDeleting } = useDeleteHotel(filters);

  const isEditMode = Boolean(selectedHotel);
  const searchOptions = HOTEL_COLUMNS.filter(col => col.filterable).map(col => ({
    label: col.label,
    value: col.accessor as keyof Hotel,
  }));

  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  const onDeleteRequest = (hotel: Hotel) => {
    setHotelToDelete(hotel);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (hotelToDelete) {
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

  const onShowRooms = (hotel: Hotel) => {
    navigate(`/me/admin/rooms/${hotel.id}`);
  };

  const actions = useMemo(() => {
    return [
      {
        label: 'Show Rooms',
        icon: <KingBedRounded />,
        onClick: onShowRooms,
      },
      {
        label: 'Delete Hotel',
        icon: <Delete />,
        onClick: onDeleteRequest,
        isPending: isDeleting,
        color: 'error' as const,
      },
    ];
  }, [isDeleting]);

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
        onSearchChange={() => {}}
        searchValue={''}
        rowsPerPage={HOTELS_PER_PAGE}
        hasNextPage={hasNextPage}
        formikProps={formikProps}
        searchOptions={searchOptions}
        actions={actions}
      />

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
