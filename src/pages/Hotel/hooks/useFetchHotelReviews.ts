import { useErrorToastOnce } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { fetchHotelReviews } from '../API';
import { HOTEL_REVIEWS_QUERY_KEY } from '../Hotel.constants';

const useFetchHotelReviews = (hotelId: number) => {
  const {
    data: hotelReviews,
    isPending,
    error,
  } = useQuery({
    queryFn: () => fetchHotelReviews(hotelId),
    queryKey: [HOTEL_REVIEWS_QUERY_KEY, hotelId],
  });

  useErrorToastOnce(error, 'Failed to load hotel data.');

  return { hotelReviews, isPending };
};

export default useFetchHotelReviews;
