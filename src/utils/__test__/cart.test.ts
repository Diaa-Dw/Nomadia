import { getCartItems, setCartItems, removeCartItems, findItemIndex } from '../cart';
import { CART_ITEMS_KEY } from '@/constants';
import { CartItem, CartState } from '@/features/cart/types';
import { showErrorToast } from '../toast';
import { sampleItem } from '@/__mock__/cartItem';

jest.mock('../toast', () => ({
  showErrorToast: jest.fn(),
}));

const mockToast = showErrorToast as jest.Mock;

const PARSE_ERROR = 'Failed to parse cart items from localStorage.';
const SAVE_ERROR = 'Failed to save cart data. Your storage might be full.';
const REMOVE_ERROR = 'Failed to clear cart data.';

const mockItems: CartItem[] = [{ ...sampleItem }];
const mockState: CartState = {
  items: mockItems,
  totalItems: mockItems.length,
  totalPrice: mockItems.reduce((acc, item) => acc + item.price, 0),
};

describe('cart utils', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('getCartItems', () => {
    it('should return parsed cart items from localStorage', () => {
      localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(mockItems));

      const result = getCartItems();
      expect(result).toEqual(mockItems);
    });

    it('should return empty array if nothing in localStorage', () => {
      const result = getCartItems();
      expect(result).toEqual([]);
    });

    it('should handle parse error and remove bad data', () => {
      jest.spyOn(JSON, 'parse').mockImplementationOnce(() => {
        throw new Error('bad JSON');
      });

      localStorage.setItem(CART_ITEMS_KEY, 'invalid-json');

      const result = getCartItems();

      expect(result).toEqual([]);
      expect(mockToast).toHaveBeenCalledWith(PARSE_ERROR);
      expect(localStorage.getItem(CART_ITEMS_KEY)).toBeNull();

      jest.restoreAllMocks();
    });
  });

  describe('setCartItems', () => {
    it('should stringify and store cart items', () => {
      setCartItems(mockState);

      const stored = localStorage.getItem(CART_ITEMS_KEY);
      expect(stored).toBe(JSON.stringify(mockItems));
    });

    it('should catch and toast on storage error', () => {
      jest.spyOn(Storage.prototype, 'setItem').mockImplementationOnce(() => {
        throw new Error('Storage full');
      });

      setCartItems(mockState);

      expect(mockToast).toHaveBeenCalledWith(SAVE_ERROR);

      jest.restoreAllMocks();
    });
  });

  describe('removeCartItems', () => {
    it('should remove cart data from localStorage', () => {
      localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(mockItems));
      removeCartItems();
      expect(localStorage.getItem(CART_ITEMS_KEY)).toBeNull();
    });

    it('should catch and toast on remove error', () => {
      jest.spyOn(Storage.prototype, 'removeItem').mockImplementationOnce(() => {
        throw new Error('Remove failed');
      });

      removeCartItems();

      expect(mockToast).toHaveBeenCalledWith(REMOVE_ERROR);

      jest.restoreAllMocks();
    });
  });

  describe('findItemIndex', () => {
    it('should return correct index if item exists', () => {
      const index = findItemIndex(mockItems, sampleItem.roomId);
      expect(index).toBe(0);
    });

    it('should return -1 if item does not exist', () => {
      const index = findItemIndex(mockItems, 999);
      expect(index).toBe(-1);
    });
  });
});
