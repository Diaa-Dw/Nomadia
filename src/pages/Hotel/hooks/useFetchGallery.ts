import { showErrorToast } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { fetchHotelGallery } from '../API';
import { HOTEL_GALLERY_QUERY_KEY } from '../Hotel.constants';

const useFetchGallery = (hotelId: number) => {
  const hasShownError = useRef(false);

  const {
    data: hotelGalary,
    isPending,
    error,
  } = useQuery({
    queryFn: () => fetchHotelGallery(hotelId),
    queryKey: [HOTEL_GALLERY_QUERY_KEY, hotelId],
  });

  useEffect(() => {
    if (error && !hasShownError.current) {
      showErrorToast('Failed to load hotel data.');
      hasShownError.current = true;
    }
  }, [error]);

  return { hotelGalary, isPending };
};

export default useFetchGallery;
