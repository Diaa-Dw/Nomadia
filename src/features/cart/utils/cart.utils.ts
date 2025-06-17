import { Draft } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../types';

import { findItemIndex, setCartItems, showSuccessToast } from '@/utils';

export const handleAddToCart = (state: Draft<CartState>, item: CartItem): boolean => {
  const exists = state.items.some(
    existing =>
      existing.roomId === item.roomId &&
      existing.checkInDate === item.checkInDate &&
      existing.checkOutDate === item.checkOutDate
  );

  if (exists) {
    showSuccessToast(`This room is already in your cart`);

    return false;
  }

  state.items.push(item);
  state.totalItems += 1;
  state.totalPrice += item.price;

  setCartItems(state);

  showSuccessToast(
    `${item.roomType} room added to cart (${item.checkInDate} → ${item.checkOutDate})`
  );

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
