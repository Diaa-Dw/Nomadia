import userReducer, { login, logout } from '../userSlice';
import { userInitialState } from '../constants';
import { mockLoginPayload } from '../__mock__/userMock';
import { removeAuthToken } from '@/utils';

jest.mock('@/utils', () => ({
  removeAuthToken: jest.fn(),
}));

describe('userSlice', () => {
  it('should return the initial state', () => {
    const state = userReducer(undefined, { type: 'init' });
    expect(state).toEqual(userInitialState);
  });

  it('should handle login action', () => {
    const state = userReducer(userInitialState, login(mockLoginPayload));

    expect(state).toEqual({
      ...mockLoginPayload,
      isAuthenticated: true,
    });
  });

  it('should handle logout action', () => {
    const loggedInState = {
      ...mockLoginPayload,
      isAuthenticated: true,
    };

    const state = userReducer(loggedInState, logout());

    expect(removeAuthToken).toHaveBeenCalled();
    expect(state).toEqual(userInitialState);
  });
});
