import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartInitialState } from './constants/cartInitialState';
import { CartItem } from './types';
import { handleAddToCart, handleRemoveFromCart } from './utils/cart.utils';

const initialState = cartInitialState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      handleAddToCart(state, action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      handleRemoveFromCart(state, action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
