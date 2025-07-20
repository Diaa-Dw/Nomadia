import { SearchFormPayload } from '@/types';
import { parse } from 'qs';
import { formatDate } from '@/utils';
import { parseDate, parseEnum, parseNumber } from '@/utils/parsers';
import { INITIAL_VALUES, SORT_OPTIONS, STAR_RATES } from '@/features/search/constants';

export const parseSearchQueryParams = (search: string): SearchFormPayload => {
  const params = parse(search, { ignoreQueryPrefix: true });

  const starRate = parseNumber(params.starRate, NaN);
  return {
    city: typeof params.city === 'string' ? params.city : INITIAL_VALUES.city,
    dateRange: {
      checkInDate: parseDate(params.checkInDate, INITIAL_VALUES.dateRange.checkInDate),
      checkOutDate: parseDate(params.checkOutDate, INITIAL_VALUES.dateRange.checkOutDate),
    },
    adults: parseNumber(params.adults, INITIAL_VALUES.adults, 1),
    children: parseNumber(params.children, INITIAL_VALUES.children, 0),
    numberOfRooms: parseNumber(params.numberOfRooms, INITIAL_VALUES.numberOfRooms, 1),
    starRate: STAR_RATES.includes(starRate) ? starRate : INITIAL_VALUES.starRate,
    sort: parseEnum(
      params.sort,
      SORT_OPTIONS,
      INITIAL_VALUES.sort as (typeof SORT_OPTIONS)[number]
    ),
  };
};

export const buildSearchParams = (values: SearchFormPayload): string => {
  const params = new URLSearchParams();

  if (values.city) params.set('city', values.city);

  const { checkInDate, checkOutDate } = values.dateRange;
  if (checkInDate) params.set('checkInDate', formatDate(checkInDate));
  if (checkOutDate) params.set('checkOutDate', formatDate(checkOutDate));

  params.set('adults', values.adults.toString());
  params.set('children', values.children.toString());
  params.set('numberOfRooms', values.numberOfRooms.toString());
  if (values.sort) params.set('sort', values.sort);

  return params.toString();
};
