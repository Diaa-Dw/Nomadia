import { CartItem, CartState } from '@/features/cart/types';
import { CART_ITEMS_KEY } from '@/constants';
import { showErrorToast } from './toast';

export const getCartItems = (): CartItem[] => {
  let items: CartItem[] = [];

  try {
    const storedItems = localStorage.getItem(CART_ITEMS_KEY);
    if (storedItems) {
      items = JSON.parse(storedItems);
    }
  } catch (error) {
    console.error('Failed to parse cart items from localStorage:', error);
    showErrorToast('Failed to parse cart items from localStorage.');
    localStorage.removeItem(CART_ITEMS_KEY);
  }
  return items;
};

export const setCartItems = (state: CartState): void => {
  try {
    localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(state.items));
  } catch (error: unknown) {
    console.error('Failed to save cart items to localStorage:', error);
    showErrorToast('Failed to save cart data. Your storage might be full.');
  }
};

export const removeCartItems = (): void => {
  try {
    localStorage.removeItem(CART_ITEMS_KEY);
  } catch (error) {
    console.error('Failed to remove cart items from localStorage:', error);
    showErrorToast('Failed to clear cart data.');
  }
};

export const findItemIndex = (items: CartItem[], roomId: number): number =>
  items.findIndex(item => item.roomId === roomId);
