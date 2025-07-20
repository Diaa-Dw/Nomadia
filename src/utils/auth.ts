import { ACCESS_TOKEN_KEY } from '../constants';
import Cookies from 'js-cookie';

export const getAuthToken = (): string | undefined => {
  return Cookies.get(ACCESS_TOKEN_KEY);
};

export const setAuthToken = (token: string, expires: number): void => {
  Cookies.set(ACCESS_TOKEN_KEY, token, {
    secure: true,
    sameSite: 'Strict',
    expires,
  });
};

export const removeAuthToken = (): void => {
  Cookies.remove(ACCESS_TOKEN_KEY);
};
