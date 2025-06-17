import { getCartItems } from '@/utils';
import { CartState } from '../types';

const items = getCartItems();
console.log('🚀 ~ items:', items);

export const cartInitialState: CartState = {
  items,
  totalItems: items.length,
  totalPrice: items.reduce((acc, item) => acc + item.price, 0),
};
