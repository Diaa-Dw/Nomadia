import { Column } from '@/containers/AdminTableLayout/AdminTableLayout.types';
import { Hotel } from '../types/HotelsMAnagement.types';
import { Box } from '@mui/material';
import { HotelMap } from '@/pages/Hotel/components';

export const HOTELS_QUERY_KEY = 'hotels';
export const HOTELS_PER_PAGE = 10;

export const HOTEL_COLUMNS: Column<Hotel>[] = [
  {
    label: 'ID',
    accessor: 'id',
  },

  {
    label: 'Name',
    accessor: 'name',
    filterable: true,
  },
  {
    label: 'Description',
    accessor: 'description',
    filterable: true,
  },
  {
    label: 'Hotel Type',
    accessor: 'hotelType',
  },
  {
    label: 'sStar Rating',
    accessor: 'starRating',
  },
  {
    label: 'Location',
    accessor: 'latitude',
    render: (_, row) => (
      <Box sx={{ width: 252, height: 200 }}>
        <HotelMap lat={row.latitude} height={200} lng={row.longitude} name={row.name} />
      </Box>
    ),
  },
];
