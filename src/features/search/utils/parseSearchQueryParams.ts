import { parse } from 'qs';
import { startOfDay } from 'date-fns';

import { SearchFormPayload } from '@/types';
import { INITIAL_VALUES, SORT_OPTIONS, STAR_RATES } from '../constants';

export const parseSearchQueryParams = (search: string): SearchFormPayload => {
  const params = parse(search, { ignoreQueryPrefix: true });

  const getDate = (value: unknown): Date => {
    return typeof value === 'string' ? startOfDay(new Date(value)) : new Date();
  };

  const getNumber = (value: unknown, fallback: number): number => {
    const parsed = Number(value);
    return isNaN(parsed) ? fallback : parsed;
  };

  return {
    city: typeof params.city === 'string' ? params.city : INITIAL_VALUES.city,

    dateRange: {
      startDate: getDate(params.startDate) || INITIAL_VALUES.dateRange.startDate,
      endDate: getDate(params.endDate) || INITIAL_VALUES.dateRange.endDate,
    },

    adults: getNumber(params.adults, INITIAL_VALUES.adults),
    children: getNumber(params.children, INITIAL_VALUES.children),
    numberOfRooms: getNumber(params.numberOfRooms, INITIAL_VALUES.numberOfRooms),

    starRate: (() => {
      const rate = getNumber(params.starRate, NaN);
      return STAR_RATES.includes(rate) ? rate : INITIAL_VALUES.starRate;
    })(),

    sort:
      typeof params.sort === 'string' && SORT_OPTIONS.includes(params.sort)
        ? params.sort
        : INITIAL_VALUES.sort,
  };
};
