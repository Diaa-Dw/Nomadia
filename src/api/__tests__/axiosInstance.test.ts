import { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getAuthToken } from '@/utils';
import { showErrorToast } from '@/utils';
import { getErrorMessage } from '../utils/errorUtils';
import setupRequestInterceptor from '../interceptors/requestInterceptor';
import setupResponseInterceptor from '../interceptors/responseInterceptor';

jest.mock('axios');
jest.mock('@/utils', () => ({
  getAuthToken: jest.fn(),
  showErrorToast: jest.fn(),
}));
jest.mock('../utils/errorUtils', () => ({
  getErrorMessage: jest.fn(),
}));

const mockGetAuthToken = getAuthToken as jest.MockedFunction<typeof getAuthToken>;
const mockShowErrorToast = showErrorToast as jest.MockedFunction<typeof showErrorToast>;
const mockGetErrorMessage = getErrorMessage as jest.MockedFunction<typeof getErrorMessage>;

describe('Request Interceptor', () => {
  let mockInstance: AxiosInstance;
  let mockRequestUse: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRequestUse = jest.fn();
    mockInstance = {
      interceptors: {
        request: {
          use: mockRequestUse,
        },
        response: {
          use: jest.fn(),
        },
      },
    } as unknown as AxiosInstance;
  });

  it('should add Authorization header when token exists', () => {
    const mockToken = 'test-token-123';
    const mockConfig = {
      headers: {},
    } as unknown as InternalAxiosRequestConfig;

    mockGetAuthToken.mockReturnValue(mockToken);

    setupRequestInterceptor(mockInstance);
    const requestHandler = mockRequestUse.mock.calls[0][0];
    const result = requestHandler(mockConfig);

    expect(result.headers?.Authorization).toBe(`Bearer ${mockToken}`);
    expect(mockGetAuthToken).toHaveBeenCalled();
  });

  it('should not add Authorization header when token does not exist', () => {
    const mockConfig = {
      headers: {},
    } as unknown as InternalAxiosRequestConfig;

    mockGetAuthToken.mockReturnValue(null);

    setupRequestInterceptor(mockInstance);
    const requestHandler = mockRequestUse.mock.calls[0][0];
    const result = requestHandler(mockConfig);

    expect(result.headers?.Authorization).toBeUndefined();
    expect(mockGetAuthToken).toHaveBeenCalled();
  });

  it('should preserve existing headers when adding Authorization', () => {
    const mockToken = 'test-token-123';
    const mockConfig = {
      headers: {
        'Custom-Header': 'custom-value',
      },
    } as unknown as InternalAxiosRequestConfig;

    mockGetAuthToken.mockReturnValue(mockToken);

    setupRequestInterceptor(mockInstance);
    const requestHandler = mockRequestUse.mock.calls[0][0];
    const result = requestHandler(mockConfig);

    expect(result.headers).toEqual({
      'Custom-Header': 'custom-value',
      Authorization: `Bearer ${mockToken}`,
    });
  });
});

describe('Response Interceptor', () => {
  let mockInstance: AxiosInstance;
  let mockResponseUse: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockResponseUse = jest.fn();
    mockInstance = {
      interceptors: {
        request: {
          use: jest.fn(),
        },
        response: {
          use: mockResponseUse,
        },
      },
    } as unknown as AxiosInstance;
  });

  it('should return response unchanged on success', () => {
    const mockResponse: AxiosResponse = {
      data: { success: true },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {} as unknown as InternalAxiosRequestConfig,
    };

    setupResponseInterceptor(mockInstance);
    const successHandler = mockResponseUse.mock.calls[0][0];
    const result = successHandler(mockResponse);

    expect(result).toBe(mockResponse);
  });

  it('should show error toast and reject error on failure', async () => {
    const mockError: AxiosError = {
      message: 'Network error',
      name: 'AxiosError',
      isAxiosError: true,
      toJSON: () => ({}),
    } as AxiosError;

    const mockErrorMessage = 'Custom error message';
    mockGetErrorMessage.mockReturnValue(mockErrorMessage);

    setupResponseInterceptor(mockInstance);
    const errorHandler = mockResponseUse.mock.calls[0][1];

    await expect(errorHandler(mockError)).rejects.toBe(mockError);
    expect(mockGetErrorMessage).toHaveBeenCalledWith(mockError);
    expect(mockShowErrorToast).toHaveBeenCalledWith(mockErrorMessage);
  });
});
