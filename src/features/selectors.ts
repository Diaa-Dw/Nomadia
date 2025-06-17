import { RootState } from '@/store/store';

export const selectUser = (state: RootState) => state.user;
export const selectCart = (state: RootState) => state.cart;
