import { isCartItemValid } from '../cartItemValidation';
import { addDays, format } from 'date-fns';
import { sampleItem } from '@/__mock__/cartItem';

describe('isCartItemValid', () => {
  const formatDate = (date: Date) => format(date, 'yyyy-MM-dd');

  it('should returns true when checkIn is today and checkOut is after checkIn', () => {
    const item = {
      ...sampleItem,
      checkInDate: formatDate(new Date()),
      checkOutDate: formatDate(addDays(new Date(), 1)),
    };

    expect(isCartItemValid(item)).toBe(true);
  });

  it('returns true when check-in is in future and check-out is after check-in', () => {
    const item = {
      ...sampleItem,
      checkInDate: formatDate(addDays(new Date(), 2)),
      checkOutDate: formatDate(addDays(new Date(), 4)),
    };
    expect(isCartItemValid(item)).toBe(true);
  });

  it('returns false when check-in is in the past', () => {
    const item = {
      ...sampleItem,
      checkInDate: formatDate(addDays(new Date(), -1)),
      checkOutDate: formatDate(addDays(new Date(), 1)),
    };
    expect(isCartItemValid(item)).toBe(false);
  });

  it('returns false when check-out is before check-in', () => {
    const item = {
      ...sampleItem,
      checkInDate: formatDate(addDays(new Date(), 2)),
      checkOutDate: formatDate(addDays(new Date(), 1)),
    };
    expect(isCartItemValid(item)).toBe(false);
  });

  it('returns false when check-in and check-out are the same day', () => {
    const item = {
      ...sampleItem,
      checkInDate: formatDate(addDays(new Date(), 1)),
      checkOutDate: formatDate(addDays(new Date(), 1)),
    };
    expect(isCartItemValid(item)).toBe(false);
  });
});
