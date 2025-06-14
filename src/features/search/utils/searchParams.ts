import { SearchFormPayload } from '@/types';
import { format } from 'date-fns';
import { parse } from 'qs';
import { INITIAL_VALUES, SORT_OPTIONS, STAR_RATES } from '../constants';
import { parseDate, parseEnum, parseNumber } from './parsers';

const formatDate = (date: Date): string => format(date, 'yyyy-MM-dd');

export const parseSearchQueryParams = (search: string): SearchFormPayload => {
  const params = parse(search, { ignoreQueryPrefix: true });

  const starRate = parseNumber(params.starRate, NaN);
  return {
    city: typeof params.city === 'string' ? params.city : INITIAL_VALUES.city,
    dateRange: {
      startDate: parseDate(params.startDate, INITIAL_VALUES.dateRange.startDate),
      endDate: parseDate(params.endDate, INITIAL_VALUES.dateRange.endDate),
    },
    adults: parseNumber(params.adults, INITIAL_VALUES.adults),
    children: parseNumber(params.children, INITIAL_VALUES.children),
    numberOfRooms: parseNumber(params.numberOfRooms, INITIAL_VALUES.numberOfRooms),
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

  console.log('🚀 ~ buildSearchParams ~ values:', values);

  if (values.city) params.set('city', values.city);

  const { startDate, endDate } = values.dateRange;
  if (startDate) params.set('startDate', formatDate(startDate));
  if (endDate) params.set('endDate', formatDate(endDate));

  params.set('adults', values.adults.toString());
  params.set('children', values.children.toString());
  params.set('numberOfRooms', values.numberOfRooms.toString());

  return params.toString();
};
