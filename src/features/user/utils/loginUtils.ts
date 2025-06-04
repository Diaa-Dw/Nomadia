import { PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload, UserState } from '../types';
import { userInitialState } from '../constants';
import { removeAuthToken } from '../../../utils';

export const handleUserLogin = (state: UserState, action: PayloadAction<LoginPayload>): void => {
  const { userId, givenName, familyName, userType, expirationDate } = action.payload;

  state.userId = userId;
  state.givenName = givenName;
  state.familyName = familyName;
  state.userType = userType;
  state.expirationDate = expirationDate;

  state.isAuthenticated = true;
};

export const handleUserLogout = (): UserState => {
  removeAuthToken();
  return userInitialState;
};
