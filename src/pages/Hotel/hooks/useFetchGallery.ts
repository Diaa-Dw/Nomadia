import { useErrorToastOnce } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { fetchHotelGallery } from '../API';
import { HOTEL_GALLERY_QUERY_KEY } from '../constants/Hotel.constants';

const useFetchGallery = (hotelId: number) => {
  const {
    data: hotelGalary,
    isPending,
    error,
  } = useQuery({
    queryFn: () => fetchHotelGallery(hotelId),
    queryKey: [HOTEL_GALLERY_QUERY_KEY, hotelId],
  });

  useErrorToastOnce(error, 'Failed to load hotel data.');

  return { hotelGalary, isPending };
};

export default useFetchGallery;
