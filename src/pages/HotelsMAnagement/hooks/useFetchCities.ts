import { CITIES_QUERY_KEY } from '@/pages/CitiesManagement/constants';
import { useQuery } from '@tanstack/react-query';
import { fetchCities } from '../API';
import { useErrorToastOnce } from '@/hooks';

export const useFetchCities = (name: string) => {
  const {
    data: cities,
    isFetching,
    error,
  } = useQuery({
    queryKey: [CITIES_QUERY_KEY, name],
    queryFn: () => fetchCities(name),
  });

  useErrorToastOnce(error, 'Faild to load cities');

  return {
    cities,
    isFetching,
  };
};
