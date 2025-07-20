import { Room } from '@/types/room';

export interface CartItem extends Room {
  checkInDate: string;
  checkOutDate: string;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
