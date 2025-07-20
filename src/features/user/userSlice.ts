import { createSlice } from '@reduxjs/toolkit';
import { userInitialState as initialState } from './constants';
import { handleUserLogin, handleUserLogout } from './utils';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: handleUserLogin,
    logout: handleUserLogout,
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
