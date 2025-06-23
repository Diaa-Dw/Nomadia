import { useErrorToastOnce } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { HOTEL_ROOMS_QUERY_KEY } from '../pages/Hotel/Hotel.constants';
import { fetchHotelRooms } from '@/services/Rooms.api';
import { fetchHotelRoomsProps } from '@/types/room';

const useFetchHotelRooms = (params: fetchHotelRoomsProps | null) => {
  const {
    data: hotelRooms,
    isPending,
    error,
  } = useQuery({
    queryFn: () => {
      if (!params) throw new Error('Params are required');
      return fetchHotelRooms(params);
    },
    queryKey: [HOTEL_ROOMS_QUERY_KEY, params],
  });

  useErrorToastOnce(
    error,
    `Failed to load hotel's rooms data. Please be sure to select hotels and try again.`
  );

  return { hotelRooms, isPending };
};

export default useFetchHotelRooms;
