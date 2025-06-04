import { UserState } from '../types';

export const userInitialState: UserState = {
  userId: '',
  givenName: '',
  familyName: '',
  userType: '',
  expirationDate: 0,
  isAuthenticated: false,
};
