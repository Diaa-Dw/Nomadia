import { useInfiniteQuery } from '@tanstack/react-query';
import { CITIES_PER_PAGE, CITIES_QUERY_KEY } from '../constants';
import { fetchCities } from '../API';
import { useErrorToastOnce } from '@/hooks';
import { useState } from 'react';

const useFetchCities = (filters: { filterField?: string; searchQuery?: string }) => {
  const [page, setPage] = useState(1);

  const { data, isFetching, error, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [CITIES_QUERY_KEY, filters],
      queryFn: ({ pageParam = 1 }) =>
        fetchCities(pageParam, CITIES_PER_PAGE, filters.filterField, filters.searchQuery),
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length < CITIES_PER_PAGE ? undefined : allPages.length + 1,
      initialPageParam: 1,
    });

  useErrorToastOnce(error, 'Faild to load cities. Please try again later.');

  const handlePageChange = async (newPage: number) => {
    if (newPage > page && hasNextPage) {
      await fetchNextPage();
    }
    setPage(newPage);
  };

  const cities = data?.pages.flat() ?? [];

  return {
    cities,
    isFetching,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    onPageChange: handlePageChange,
  };
};

export default useFetchCities;
