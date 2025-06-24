import { AdminTableLayout } from '@/containers';
import { AdminTable, AdminTableHeader } from '@/containers/AdminTableLayout';
import useFetchHotelRooms from '@/hooks/useFetchHotelRooms';
import { fetchHotelRoomsProps, Room } from '@/types/room';
import { Button, Collapse, Container } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import RoomsSearchForm from './components/HotelRoomSearch/HotelRoomSearch';
import { ROOM_ACTIONS, ROOM_COLUMNS, TITLE } from './constants';
import { useDeleteRoom } from './hooks';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { AddRoomDialog } from './components/AddRoomDialog';
import { showErrorToast } from '@/utils';
import UpdateRoomDialog from './components/UpdateRoomDialog/UpdateRoomDialog';

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
      <AdminTableLayout
        isFetching={false}
        isFetchingNextPage={false}
        fetchNextPage={() => {}}
        hasNextPage={false}
      >
        <AdminTableHeader title={TITLE} onAdd={onOpenAddDialog}>
          <Button onClick={toggleSearchForm} variant="outlined" size="small">
            {openSearch ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </AdminTableHeader>
        <Collapse in={openSearch}>
          <RoomsSearchForm onSearch={onSearch} />
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
