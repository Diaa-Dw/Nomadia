import { useQuery } from '@tanstack/react-query';
import { fetchHotel } from '../API';
import { HOTEL_QUERY_KEY } from '../Hotel.constants';
import { useEffect, useRef } from 'react';
import { showErrorToast } from '@/utils';

const useFetchHotel = (hotelId: number) => {
  const hasShownError = useRef(false);

  const {
    data: hotel,
    isPending,
    error,
  } = useQuery({
    queryFn: () => fetchHotel(hotelId),
    queryKey: [HOTEL_QUERY_KEY, hotelId],
  });

  useEffect(() => {
    if (error && !hasShownError.current) {
      showErrorToast('Failed to load hotel data.');
      hasShownError.current = true;
    }
  }, [error]);

  return { hotel, isPending };
};

export default useFetchHotel;
