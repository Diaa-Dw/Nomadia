import { CartItem } from '@/features/cart/types';
import { isAfter, isEqual, parseISO, startOfDay } from 'date-fns';

export const isCartItemValid = (item: CartItem) => {
  const now = startOfDay(new Date());
  const checkIn = startOfDay(parseISO(item.checkInDate));
  console.log('🚀 ~ isCartItemValid ~ checkInDate:', item.checkInDate);
  const checkOut = startOfDay(parseISO(item.checkOutDate));

  const checkInValid = isAfter(checkIn, now) || isEqual(checkIn, now);
  console.log('🚀 ~ isCartItemValid ~ checkInValid:', checkInValid);
  const checkOutValid = isAfter(checkOut, checkIn);

  return checkInValid && checkOutValid;
};
