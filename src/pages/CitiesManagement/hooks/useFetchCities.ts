import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCities } from '../API';
import { CITIES_PER_PAGE, CITIES_QUERY_KEY } from '../constants';
import { useErrorToastOnce } from '@/hooks';
import { Filters } from '@/types';

const useFetchCities = (filters: Filters) => {
  const { data, isFetching, error, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [CITIES_QUERY_KEY, filters],
      queryFn: ({ pageParam = 1 }) => fetchCities(pageParam, CITIES_PER_PAGE, filters),
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length < CITIES_PER_PAGE ? undefined : allPages.length + 1,
      initialPageParam: 1,
    });

  useErrorToastOnce(error, 'Failed to load cities. Please try again later.');

  const cities = data?.pages.flatMap(page => page) ?? [];

  return {
    cities,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
};

export default useFetchCities;
