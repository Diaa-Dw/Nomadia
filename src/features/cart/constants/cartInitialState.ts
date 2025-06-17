import { getCartItems } from '@/utils';
import { CartState } from '../types';

const items = getCartItems();

export const cartInitialState: CartState = {
  items,
  totalItems: items?.length,
  totalPrice: items.reduce((acc, item) => acc + item.price, 0),
};
