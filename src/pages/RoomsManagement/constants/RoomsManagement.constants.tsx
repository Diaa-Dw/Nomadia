import { addDays } from 'date-fns';
import { CreateRoomRequest, SearchFormPayload } from '../types';
import { Column } from '@/containers/AdminTableLayout/AdminTableLayout.types';
import { Room } from '@/types/room';
import { Box, Chip, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { getImageSrcSet } from '@/utils';

export const TITLE = 'Rooms Management';
export const HOTELS_QUERY_KEY = 'rooms/hotels';

export const INITIAL_VALUES: SearchFormPayload = {
  hotelId: null,
  dateRange: {
    checkInDate: new Date(),
    checkOutDate: addDays(new Date(), 1),
  },
};

export const ADD_ROOM_INITIAL_VALUES: CreateRoomRequest = {
  hotelId: 0,
  roomNumber: '',
  cost: 0,
};

export const ROOM_COLUMNS: Column<Room>[] = [
  {
    label: 'ID',
    accessor: 'roomId',
  },
  {
    label: 'Room Number',
    accessor: 'roomNumber',
    filterable: true,
  },
  {
    label: 'Room Type',
    accessor: 'roomType',
    filterable: true,
  },
  {
    label: 'Capacity',
    accessor: 'capacityOfAdults',
    render: (_, row) => (
      <Typography variant="body2">
        {row.capacityOfAdults} adults, {row.capacityOfChildren} children
      </Typography>
    ),
  },
  {
    label: 'Price',
    accessor: 'price',
    render: value => `$${value}`,
  },
  {
    label: 'Availability',
    accessor: 'availability',
    render: value =>
      value ? (
        <Chip label="Available" color="success" size="small" />
      ) : (
        <Chip label="Unavailable" color="error" size="small" />
      ),
  },
  {
    label: 'Photo',
    accessor: 'roomPhotoUrl',
    render: url => (
      <Box
        component="img"
        loading="lazy"
        {...getImageSrcSet(url as string, 160)}
        alt="Room"
        sx={{ width: 160, height: 140, objectFit: 'cover', borderRadius: 1 }}
      />
    ),
  },
  {
    label: 'Amenities',
    accessor: 'amenities',
    render: (_, row) => (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {row.amenities.map(a => (
          <Chip key={a.id} label={a.name} size="small" />
        ))}
      </Box>
    ),
  },
];

export const ROOM_ACTIONS = [
  {
    key: 'deleteHotel',
    label: 'Delete Hotel',
    icon: <Delete />,
    color: 'error' as const,
  },
];
