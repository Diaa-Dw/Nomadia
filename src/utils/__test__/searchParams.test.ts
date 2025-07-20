import { INITIAL_VALUES } from '@/features/search/constants';
import { searchPayload } from '../__mock__/searchPayload';
import { buildSearchParams, parseSearchQueryParams } from '../searchParams';
import { formatDate } from '@/utils';

jest.mock('@/utils', () => ({
  formatDate: (date: string | Date) =>
    typeof date === 'string' ? date : new Date(date).toISOString().split('T')[0],
}));

describe('searchParams utils', () => {
  describe('parseSearchQueryParams', () => {
    it('should parse full query string correctly', () => {
      const query = `?city=${searchPayload.city}&checkInDate=${formatDate(
        searchPayload.dateRange.checkInDate
      )}&checkOutDate=${formatDate(
        searchPayload.dateRange.checkOutDate
      )}&adults=${searchPayload.adults}&children=${searchPayload.children}&numberOfRooms=${
        searchPayload.numberOfRooms
      }&starRate=${searchPayload.starRate}&sort=${searchPayload.sort}`;

      const result = parseSearchQueryParams(query);

      expect(result).toEqual(searchPayload);
    });

    it('should fall back to initial values on invalid query', () => {
      const query = `?city=istanbul&checkInDate=invalid&checkOutDate=invalid&adults=abc&children=-1&numberOfRooms=0&starRate=99&sort=invalid`;
      const result = parseSearchQueryParams(query);

      expect(result.city).toBe('istanbul');
      expect(result.dateRange).toEqual(INITIAL_VALUES.dateRange);
      expect(result.adults).toBe(INITIAL_VALUES.adults);
      expect(result.children).toBe(INITIAL_VALUES.children);
      expect(result.numberOfRooms).toBe(INITIAL_VALUES.numberOfRooms);
      expect(result.starRate).toBe(INITIAL_VALUES.starRate);
      expect(result.sort).toBe(INITIAL_VALUES.sort);
    });
  });

  describe('buildSearchParams', () => {
    it('should skip optional fields if missing', () => {
      const payload = {
        ...INITIAL_VALUES,
        city: '',
        dateRange: {
          checkInDate: new Date('2025-06-27'),
          checkOutDate: new Date('2025-06-30'),
        },
      };

      const result = buildSearchParams(payload);
      const params = new URLSearchParams(result);

      expect(params.has('city')).toBe(false);
      expect(params.get('checkInDate')).toBe('2025-06-27');
      expect(params.get('checkOutDate')).toBe('2025-06-30');
      expect(params.get('adults')).toBe(INITIAL_VALUES.adults.toString());
      expect(params.get('children')).toBe(INITIAL_VALUES.children.toString());
      expect(params.get('numberOfRooms')).toBe(INITIAL_VALUES.numberOfRooms.toString());
    });
  });
});
