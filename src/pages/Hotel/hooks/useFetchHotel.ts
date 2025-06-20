import { useErrorToastOnce } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { fetchHotel } from '../API';
import { HOTEL_QUERY_KEY } from '../Hotel.constants';

const useFetchHotel = (hotelId: number) => {
  const {
    data: hotel,
    isPending,
    error,
  } = useQuery({
    queryFn: () => fetchHotel(hotelId),
    queryKey: [HOTEL_QUERY_KEY, hotelId],
  });

  useErrorToastOnce(error, 'Failed to load hotel data.');

  return { hotel, isPending };
};

export default useFetchHotel;
