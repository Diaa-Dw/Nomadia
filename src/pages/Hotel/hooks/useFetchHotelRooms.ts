import { useEffect, useRef } from 'react';
import { fetchHotelRooms } from '../API';
import { fetchHotelRoomsProps } from '../types';
import { HOTEL_ROOMS_QUERY_KEY } from '../Hotel.constants';
import { useQuery } from '@tanstack/react-query';
import { showErrorToast } from '@/utils';

const useFetchHotelRooms = ({ hotelId, checkInDate, checkOutDate }: fetchHotelRoomsProps) => {
  const hasShownError = useRef(false);

  const {
    data: hotelReviews,
    isPending,
    error,
  } = useQuery({
    queryFn: () => fetchHotelRooms({ hotelId, checkInDate, checkOutDate }),
    queryKey: [HOTEL_ROOMS_QUERY_KEY, hotelId],
  });

  useEffect(() => {
    if (error && !hasShownError.current) {
      showErrorToast('Failed to load hotel data.');
      hasShownError.current = true;
    }
  }, [error]);

  return { hotelReviews, isPending };
};

export default useFetchHotelRooms;
