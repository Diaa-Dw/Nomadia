import { useErrorToastOnce } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { fetchHotelsApi } from '../API';
import { HOTELS_QUERY_KEY } from '../constants';

const useFetchHotels = (name: string) => {
  const {
    data: hotels,
    isFetching,
    error,
  } = useQuery({
    queryKey: [HOTELS_QUERY_KEY, name],
    queryFn: () => fetchHotelsApi(name),
  });

  useErrorToastOnce(error, 'Faild to load cities');

  return {
    hotels,
    isFetching,
  };
};

export default useFetchHotels;
