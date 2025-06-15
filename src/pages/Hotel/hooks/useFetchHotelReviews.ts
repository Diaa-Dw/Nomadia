import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { fetchHotelReviews } from '../API';
import { HOTEL_REVIEWS_QUERY_KEY } from '../Hotel.constants';
import { showErrorToast } from '@/utils';

const useFetchHotelReviews = (hotelId: number) => {
  const hasShownError = useRef(false);

  const {
    data: hotelReviews,
    isPending,
    error,
  } = useQuery({
    queryFn: () => fetchHotelReviews(hotelId),
    queryKey: [HOTEL_REVIEWS_QUERY_KEY, hotelId],
  });

  useEffect(() => {
    if (error && !hasShownError.current) {
      showErrorToast('Failed to load hotel data.');
      hasShownError.current = true;
    }
  }, [error]);

  return { hotelReviews, isPending };
};

export default useFetchHotelReviews;
