import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchResults } from '../API';
import { REQUIRED_PARAMS, SEARCH_QUERY_KEY } from '../Search.constants';

const useFetchHotels = () => {
  const [searchParams] = useSearchParams();

  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const hasAllRequiredParams = REQUIRED_PARAMS.every(key => !!params[key]);

  const { data: searchResults, isPending } = useQuery({
    queryKey: [SEARCH_QUERY_KEY, params],
    queryFn: () => fetchSearchResults(params),
    enabled: hasAllRequiredParams,
  });

  return { searchResults, isPending };
};

export default useFetchHotels;
