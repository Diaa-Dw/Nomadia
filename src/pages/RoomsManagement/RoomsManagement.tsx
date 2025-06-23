import { AdminTableLayout } from '@/containers';
import { AdminTable, AdminTableHeader } from '@/containers/AdminTableLayout';
import useFetchHotelRooms from '@/hooks/useFetchHotelRooms';
import { fetchHotelRoomsProps, Room } from '@/types/room';
import { Button, Collapse, Container } from '@mui/material';
import { useCallback, useState } from 'react';
import RoomsSearchForm from './components/HotelRoomSearch/HotelRoomSearch';
import { ROOM_ACTIONS, ROOM_COLUMNS, TITLE } from './constants';

const RoomsManagement = () => {
  const [searchParams, setSearchParams] = useState<fetchHotelRoomsProps | null>(null);
  const [openSearch, setOpenSearch] = useState(false);

  const { hotelRooms = [], isPending } = useFetchHotelRooms(searchParams);

  const onSearch = (value: fetchHotelRoomsProps) => {
    setSearchParams(value);
  };

  const toggleSearchForm = () => {
    setOpenSearch(prev => !prev);
  };

  const buildRoomActions = useCallback(
    (room: Room) => [
      {
        ...ROOM_ACTIONS[0],
        onClick: () => {},
        isPending: false,
      },
    ],
    []
  );

  return (
    <Container maxWidth="xl">
      <AdminTableLayout
        isFetching={false}
        isFetchingNextPage={false}
        fetchNextPage={() => {}}
        hasNextPage={false}
      >
        <AdminTableHeader title={TITLE} onAdd={() => {}}>
          <Button onClick={toggleSearchForm} variant="outlined" size="small">
            {openSearch ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </AdminTableHeader>
        <Collapse in={openSearch}>
          <RoomsSearchForm onSearch={onSearch} />
        </Collapse>

        <AdminTable<Room>
          columns={ROOM_COLUMNS}
          data={hotelRooms}
          isLoading={isPending}
          onRowClick={() => {}}
          actions={buildRoomActions}
        />
      </AdminTableLayout>
    </Container>
  );
};

export default RoomsManagement;
