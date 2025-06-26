import Cookies from 'js-cookie';
import { getAuthToken, setAuthToken, removeAuthToken } from '../auth';
import { ACCESS_TOKEN_KEY } from '@/constants';

jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn(),
  remove: jest.fn(),
}));

describe('auth token utils', () => {
  const mockToken = 'token';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sholud store token in cookies with default config options', () => {
    const expires = 2932119020;
    setAuthToken(mockToken, expires);

    expect(Cookies.set).toHaveBeenCalledWith(
      ACCESS_TOKEN_KEY,
      mockToken,
      expect.objectContaining({
        secure: true,
        sameSite: 'Strict',
        expires: expires,
      })
    );
  });

  it('should retrieve token from cookies', () => {
    (Cookies.get as jest.Mock).mockReturnValue(mockToken);

    const token = getAuthToken();

    expect(token).toBe(mockToken);
    expect(Cookies.get).toHaveBeenCalledWith(ACCESS_TOKEN_KEY);
  });

  it('should remove token from cookies', () => {
    removeAuthToken();

    expect(Cookies.remove).toHaveBeenCalledWith(ACCESS_TOKEN_KEY);
  });
});
