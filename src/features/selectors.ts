import { RootState } from '@/store/store';

export const selectUser = (state: RootState) => state.user;
export const selectIsAdmin = (state: RootState) => state.user.userType === 'Admin';
export const selectCart = (state: RootState) => state.cart;
