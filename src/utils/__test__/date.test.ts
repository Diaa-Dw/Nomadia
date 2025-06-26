import { formatDisplayDate, formatDate, getDateDifference } from '@/utils/date';

describe('date utils', () => {
  describe('formatDisplayDate', () => {
    it('should return formated date like=> Fri, Jun 27', () => {
      const date = new Date('2025-06-27');
      expect(formatDisplayDate(date)).toBe('Fri, Jun 27');
    });
  });

  describe('formatDate', () => {
    it('should return fomatted date like=> 2025-06-27', () => {
      const date = new Date('2025-06-27');
      expect(formatDate(date)).toBe('2025-06-27');
    });
  });

  describe('getDateDifference', () => {
    it('sholud return correct difference in days between two dates', () => {
      const start = '2025-06-27';
      const end = '2025-06-30';
      expect(getDateDifference(start, end)).toBe(3);
    });

    it('should return 1 if start and end date are the same', () => {
      const date = '2025-06-27';
      expect(getDateDifference(date, date)).toBe(1);
    });

    it('should return 1 if start date is after end date (guarding against negative)', () => {
      const start = '2025-06-30';
      const end = '2025-06-27';
      expect(getDateDifference(start, end)).toBe(1);
    });
  });
});
