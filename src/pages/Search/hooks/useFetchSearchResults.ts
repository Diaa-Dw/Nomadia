import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { fetchSearchResults } from '../API';
import { SEARCH_QUERY_KEY } from '../Search.constants';
import { formatDate, parseSearchQueryParams } from '@/utils';
import { SearchRequest } from '@/types';

const useFetchSearchResults = () => {
  const { search } = useLocation();

  const formPayload = parseSearchQueryParams(search);

  const requestPayload: SearchRequest = {
    city: formPayload.city,
    checkInDate: formatDate(formPayload.dateRange.checkInDate),
    checkOutDate: formatDate(formPayload.dateRange.checkOutDate),
    adults: formPayload.adults,
    children: formPayload.children,
    numberOfRooms: formPayload.numberOfRooms,
    starRate: formPayload.starRate,
    sort: formPayload.sort,
  };

  const hasRequiredParams = !!requestPayload.city;

  const { data: searchResults, isPending } = useQuery({
    queryKey: [SEARCH_QUERY_KEY, requestPayload],
    queryFn: () => fetchSearchResults(requestPayload),
    enabled: hasRequiredParams,
  });

  return { searchResults, isPending };
};

export default useFetchSearchResults;
