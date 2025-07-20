import reducer, { addToCart, removeFromCart } from '../catSlice';
import type { CartItem, CartState } from '../types';
import { setCartItems, showSuccessToast, showErrorToast, getCartItems } from '@/utils';
import { sampleItem } from '@/__mock__/cartItem';

jest.mock('@/utils', () => ({
  getCartItems: jest.fn(() => []),
  setCartItems: jest.fn(),
  showSuccessToast: jest.fn(),
  showErrorToast: jest.fn(),
  findItemIndex: jest.fn((items, roomId) =>
    items.findIndex((item: CartItem) => item.roomId === roomId)
  ),
}));

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

describe('cartSlice', () => {
  beforeEach(() => {
    (setCartItems as jest.Mock).mockClear();
    (showSuccessToast as jest.Mock).mockClear();
    (showErrorToast as jest.Mock).mockClear();
    (getCartItems as jest.Mock).mockReturnValue([]);
  });

  it('should add an item to the cart', () => {
    const state = reducer(initialState, addToCart(sampleItem));
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(sampleItem);
    expect(state.totalItems).toBe(1);
    expect(state.totalPrice).toBe(sampleItem.price);
    expect(setCartItems).toHaveBeenCalled();
    expect(showSuccessToast).toHaveBeenCalled();
  });

  it('should not add a duplicate item to the cart', () => {
    const stateWithItem = {
      ...initialState,
      items: [sampleItem],
      totalItems: 1,
      totalPrice: sampleItem.price,
    };
    const state = reducer(stateWithItem, addToCart(sampleItem));
    expect(state.items).toHaveLength(1);
    expect(state.totalItems).toBe(1);
    expect(state.totalPrice).toBe(sampleItem.price);
    expect(showSuccessToast).toHaveBeenCalled();
  });

  it('should remove an item from the cart', () => {
    const stateWithItem = {
      ...initialState,
      items: [sampleItem],
      totalItems: 1,
      totalPrice: sampleItem.price,
    };
    const state = reducer(stateWithItem, removeFromCart(sampleItem.roomId));
    expect(state.items).toHaveLength(0);
    expect(state.totalItems).toBe(0);
    expect(state.totalPrice).toBe(0);
    expect(setCartItems).toHaveBeenCalled();
    expect(showSuccessToast).toHaveBeenCalled();
  });

  it('should not remove an item if roomId does not exist', () => {
    const stateWithItem = {
      ...initialState,
      items: [sampleItem],
      totalItems: 1,
      totalPrice: sampleItem.price,
    };
    const state = reducer(stateWithItem, removeFromCart(999));
    expect(state.items).toHaveLength(1);
    expect(state.totalItems).toBe(1);
    expect(state.totalPrice).toBe(sampleItem.price);
    expect(showErrorToast).toHaveBeenCalled();
  });
});
