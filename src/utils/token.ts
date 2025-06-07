import { LoginPayload } from '@/features/user/types';
import { AuthTokenPayload } from '@/types';
import { jwtDecode } from 'jwt-decode';
import { showErrorToast } from './toast';

export const parseJwtToLoginPayload = (token: string): LoginPayload | null => {
  try {
    const { user_id, given_name, family_name, userType, exp } = jwtDecode<AuthTokenPayload>(token);

    if (!user_id || !given_name || !family_name || !userType || !exp) {
      throw new Error('Missing required JWT fields.');
    }

    return {
      userId: user_id,
      givenName: given_name,
      familyName: family_name,
      userType,
      expirationDate: exp,
    };
  } catch (error) {
    console.error('Failed to decode or parse JWT token', error);
    showErrorToast('Authentication failed. Please log in again.');
    return null;
  }
};

export const isTokenExpired = (expirationDate: number): boolean => {
  const expDate = new Date(expirationDate * 1000);
  const currentDate = new Date();
  console.log('🚀 ~ isTokenExpired ~ expDate:', expDate);
  console.log('🚀 ~ isTokenExpired ~ currentDate:', currentDate);

  return expDate <= currentDate;
};
