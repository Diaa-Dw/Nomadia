import { ACCESS_TOKEN_KEY } from '../constants';

export const getAuthToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setAuthToken = (token: string): void => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const removeAuthToken = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
