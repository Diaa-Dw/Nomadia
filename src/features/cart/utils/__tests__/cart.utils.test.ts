import { Draft } from '@reduxjs/toolkit';
import { handleAddToCart, handleRemoveFromCart } from '../cart.utils';
import { CartItem, CartState } from '../../types/cart.types';
import { sampleItem } from '../__mock__/cartItem';

jest.mock('@/utils', () => ({
  findItemIndex: jest.fn((items, roomId) => items.findIndex((i: CartItem) => i.roomId === roomId)),
  setCartItems: jest.fn(),
  showErrorToast: jest.fn(),
  showSuccessToast: jest.fn(),
}));

const getInitialState = (): CartState => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,
});

describe('cartSlice reducers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('handleAddToCart', () => {
    it('should add item to cart if not exists', () => {
      const state = getInitialState();
      const result = handleAddToCart(state as Draft<CartState>, sampleItem);
      expect(result).toBe(true);
      expect(state.items).toHaveLength(1);
      expect(state.totalItems).toBe(1);
      expect(state.totalPrice).toBe(sampleItem.price);
    });

    it('should not add item if already exists', () => {
      const state = getInitialState();
      state.items.push({ ...sampleItem });
      const result = handleAddToCart(state as Draft<CartState>, sampleItem);
      expect(result).toBe(false);
      expect(state.items).toHaveLength(1);
    });
  });

  describe('handleRemoveFromCart', () => {
    it('should remove item if exists', () => {
      const state = getInitialState();
      state.items.push({ ...sampleItem });
      state.totalItems = 1;
      state.totalPrice = sampleItem.price;
      const result = handleRemoveFromCart(state as Draft<CartState>, sampleItem.roomId);
      expect(result).toBe(true);
      expect(state.items).toHaveLength(0);
      expect(state.totalItems).toBe(0);
      expect(state.totalPrice).toBe(0);
    });

    it('should not remove if item does not exist', () => {
      const state = getInitialState();
      const result = handleRemoveFromCart(state as Draft<CartState>, 999);
      expect(result).toBe(false);
      expect(state.items).toHaveLength(0);
    });
  });
});
