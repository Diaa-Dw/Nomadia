import { Draft } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../types';

import { findItemIndex, setCartItems } from '@/utils';

export const handleAddToCart = (state: Draft<CartState>, item: CartItem): boolean => {
  const exists = state.items.some(
    existing =>
      existing.roomId === item.roomId &&
      existing.checkInDate === item.checkInDate &&
      existing.checkOutDate === item.checkOutDate
  );

  if (exists) return false;

  state.items.push(item);
  state.totalItems += 1;
  state.totalPrice += item.price;

  setCartItems(state);

  return true;
};

export const handleRemoveFromCart = (state: Draft<CartState>, roomId: number): boolean => {
  const index = findItemIndex(state.items, roomId);
  if (index === -1) return false;

  const [removed] = state.items.splice(index, 1);
  state.totalItems -= 1;
  state.totalPrice -= removed.price;

  setCartItems(state);

  return true;
};
