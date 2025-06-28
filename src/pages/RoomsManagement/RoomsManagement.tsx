import { ConfirmDialog } from '@/components';
import { AdminTable, AdminTableHeader, AdminTableLayout } from '@/containers';
import { useFetchHotelRooms } from '@/hooks';
import { fetchHotelRoomsProps, Room } from '@/types/room';
import { showErrorToast } from '@/utils';
import { Button, Collapse, Container } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { AddRoomDialog, HotelRoomSearch, UpdateRoomDialog } from './components';
import { ROOM_ACTIONS, ROOM_COLUMNS, TITLE } from './constants';
import { useDeleteRoom } from './hooks';

const RoomsManagement = () => {
  const [searchParams, setSearchParams] = useState<fetchHotelRoomsProps | null>(null);
  const [roomToDelete, setRoomToDelete] = useState<Room | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [roomToUpdate, setRoomToUpdate] = useState<Room | null>(null);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

  const { hotelRooms = [], isPending } = useFetchHotelRooms(searchParams);
  const { deleteRoom, isDeleting } = useDeleteRoom(searchParams);

  const memoizedRooms = useMemo(() => hotelRooms, [hotelRooms]);

  const onSearch = (value: fetchHotelRoomsProps) => {
    setSearchParams(value);
  };

  const onOpenAddDialog = () => {
    if (!searchParams?.hotelId) {
      showErrorToast('Please Select a hotel to be able to create a room');
      return;
    }
    setOpenAddDialog(true);
  };
  const onCloseAddDialog = () => {
    setOpenAddDialog(false);
  };
  const onCloseConfirm = () => {
    setConfirmOpen(false);
  };

  const onConfirmDelete = () => {
    if (roomToDelete) {
      deleteRoom(roomToDelete.roomId);
      setConfirmOpen(false);
      setRoomToDelete(null);
    }
  };

  const toggleSearchForm = () => {
    setOpenSearch(prev => !prev);
  };

  const onDeleteRequest = (room: Room) => {
    setRoomToDelete(room);
    setConfirmOpen(true);
  };

  const onUpdateRequest = (room: Room) => {
    setRoomToUpdate(room);
    setOpenUpdateDialog(true);
  };

  const onCloseUpdateDialog = () => {
    setOpenUpdateDialog(false);
    setRoomToUpdate(null);
  };

  const buildRoomActions = useCallback(
    (room: Room) => [
      {
        ...ROOM_ACTIONS[0],
        onClick: () => onDeleteRequest(room),
        isPending: isDeleting,
      },
    ],
    [isDeleting]
  );

  return (
    <Container maxWidth="xl">
      <AdminTableLayout>
        <AdminTableHeader title={TITLE} onAdd={onOpenAddDialog}>
          <Button onClick={toggleSearchForm} variant="outlined" size="small">
            {openSearch ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </AdminTableHeader>
        <Collapse in={openSearch}>
          <HotelRoomSearch onSearch={onSearch} />
        </Collapse>

        <AdminTable<Room>
          columns={ROOM_COLUMNS}
          data={memoizedRooms}
          isLoading={isPending}
          onRowClick={onUpdateRequest}
          actions={buildRoomActions}
        />
      </AdminTableLayout>

      <ConfirmDialog
        open={confirmOpen}
        title="Confirm Deletion"
        description={`Are you sure you want to delete "${roomToDelete?.roomId}"?`}
        onClose={onCloseConfirm}
        onConfirm={onConfirmDelete}
        confirmText="Delete"
        confirmColor="error"
      />

      <AddRoomDialog
        hotelId={searchParams?.hotelId || null}
        open={openAddDialog}
        onClose={onCloseAddDialog}
      />

      <UpdateRoomDialog
        roomToUodate={roomToUpdate}
        open={openUpdateDialog}
        onClose={onCloseUpdateDialog}
      />
    </Container>
  );
};

export default RoomsManagement;
