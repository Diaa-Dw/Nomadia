import { parseDate, parseNumber, parseEnum } from '../parsers';

describe('parsers', () => {
  describe('parseDate', () => {
    it('should return parsed Date when given a valid date string', () => {
      const result = parseDate('2025-07-01');
      expect(result instanceof Date).toBe(true);
      expect(result.toISOString().startsWith('2025-07-01')).toBe(true);
    });

    it('should return fallback when given an invalid date string', () => {
      const fallback = new Date('2025-01-01');
      const result = parseDate('invalid-date', fallback);
      expect(result).toBe(fallback);
    });

    it('should return fallback when given a non-string value', () => {
      const fallback = new Date('2025-01-01');
      const result = parseDate(12345, fallback);
      expect(result).toBe(fallback);
    });
  });

  describe('parseNumber', () => {
    it('should return parsed number from a valid string', () => {
      expect(parseNumber('42', 0)).toBe(42);
    });

    it('should return fallback when given an invalid number string', () => {
      expect(parseNumber('abc', 5)).toBe(5);
    });

    it('should return fallback when parsed number is less than min', () => {
      expect(parseNumber('3', 10, 5)).toBe(10);
    });

    it('should return parsed number if it meets min constraint', () => {
      expect(parseNumber('6', 0, 5)).toBe(6);
    });
  });

  describe('parseEnum', () => {
    const OPTIONS = ['price', 'rating', 'distance'] as const;

    it('should return matched enum value', () => {
      expect(parseEnum('rating', OPTIONS, 'price')).toBe('rating');
    });

    it('should return fallback if value is not in enum', () => {
      expect(parseEnum('random', OPTIONS, 'price')).toBe('price');
    });

    it('should return fallback if value is not a string', () => {
      expect(parseEnum(123, OPTIONS, 'price')).toBe('price');
    });
  });
});
