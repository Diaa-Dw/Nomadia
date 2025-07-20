import { parseJwtToLoginPayload, isTokenExpired } from '../token';
import { showErrorToast } from '../toast';
import { jwtDecode } from 'jwt-decode';
import { mockTokenData } from '../__mock__/token';

jest.mock('jwt-decode', () => ({
  jwtDecode: jest.fn(),
}));

jest.mock('../toast', () => ({
  showErrorToast: jest.fn(),
}));

const AUTH_ERROR_MESSAGE = 'Authentication failed. Please log in again.';

describe('authUtils', () => {
  const mockJwtDecode = jwtDecode as jest.Mock;

  describe('parseJwtToLoginPayload', () => {
    it('should return LoginPayload for valid token', () => {
      mockJwtDecode.mockReturnValue(mockTokenData);

      const result = parseJwtToLoginPayload('mock-token');

      expect(result).toEqual({
        userId: mockTokenData.user_id,
        givenName: mockTokenData.given_name,
        familyName: mockTokenData.family_name,
        userType: mockTokenData.userType,
        expirationDate: mockTokenData.exp,
      });
    });

    it('should return null and show error toast if JWT is missing required fields', () => {
      mockJwtDecode.mockReturnValue({
        user_id: '',
        given_name: '',
        family_name: '',
        userType: '',
        exp: undefined,
      });

      const result = parseJwtToLoginPayload('invalid-token');

      expect(result).toBeNull();
      expect(showErrorToast).toHaveBeenCalledWith(AUTH_ERROR_MESSAGE);
    });

    it('should return null and show error toast on decoding error', () => {
      mockJwtDecode.mockImplementation(() => {
        throw new Error('Invalid token');
      });

      const result = parseJwtToLoginPayload('broken-token');

      expect(result).toBeNull();
      expect(showErrorToast).toHaveBeenCalledWith(AUTH_ERROR_MESSAGE);
    });
  });

  describe('isTokenExpired', () => {
    it('should return true if token is expired', () => {
      const pastTimestamp = Math.floor((Date.now() - 10000) / 1000);
      expect(isTokenExpired(pastTimestamp)).toBe(true);
    });

    it('should return false if token is still valid', () => {
      const futureTimestamp = Math.floor((Date.now() + 60 * 60 * 1000) / 1000);
      expect(isTokenExpired(futureTimestamp)).toBe(false);
    });

    it('should return true if expiration date is exactly now', () => {
      const now = Math.floor(Date.now() / 1000);
      expect(isTokenExpired(now)).toBe(true);
    });
  });
});
