import { useErrorToastOnce } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { HOTEL_ROOMS_QUERY_KEY } from '../pages/Hotel/Hotel.constants';
import { fetchHotelRooms } from '@/services/Rooms.api';
import { fetchHotelRoomsProps } from '@/types/room';

const useFetchHotelRooms = ({ hotelId, checkInDate, checkOutDate }: fetchHotelRoomsProps) => {
  const {
    data: hotelRooms,
    isPending,
    error,
  } = useQuery({
    queryFn: () => fetchHotelRooms({ hotelId, checkInDate, checkOutDate }),
    queryKey: [HOTEL_ROOMS_QUERY_KEY, hotelId, checkInDate, checkOutDate],
  });

  useErrorToastOnce(error, `Failed to load hotel's rooms data.`);

  return { hotelRooms, isPending };
};

export default useFetchHotelRooms;
