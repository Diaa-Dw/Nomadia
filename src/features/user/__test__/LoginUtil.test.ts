import { removeAuthToken } from '@/utils';
import { mockLoginPayload } from '../__mock__/userMock';
import { userInitialState } from '../constants';
import { UserState } from '../types';
import { handleUserLogin, handleUserLogout } from '../utils';

jest.mock('@/utils', () => ({
  removeAuthToken: jest.fn(),
}));

describe('userSlice reducers', () => {
  let state: UserState;

  beforeEach(() => {
    state = { ...userInitialState };
  });

  it('should hanlde user login correctly', () => {
    handleUserLogin(state, { type: 'user/login', payload: mockLoginPayload });

    expect(state).toEqual({
      ...mockLoginPayload,
      isAuthenticated: true,
    });
  });

  it('should handle user logout correctly', () => {
    const newState = handleUserLogout();

    expect(removeAuthToken).toHaveBeenCalled();
    expect(newState).toEqual(userInitialState);
  });
});
