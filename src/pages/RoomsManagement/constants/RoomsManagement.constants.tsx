import { addDays } from 'date-fns';
import { SearchFormPayload } from '../types';
import { Column } from '@/containers/AdminTableLayout/AdminTableLayout.types';
import { Room } from '@/types/room';
import { Box, Chip, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

export const TITLE = 'Rooms Management';
export const HOTELS_QUERY_KEY = 'rooms/hotels';

export const INITIAL_VALUES: SearchFormPayload = {
  hotelId: null,
  dateRange: {
    checkInDate: new Date(),
    checkOutDate: addDays(new Date(), 1),
  },
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
        src={url as string}
        alt="Room"
        sx={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 1 }}
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
