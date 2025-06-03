import { AxiosError } from 'axios';
import { ApiErrorResponse } from '../types';
import { HttpStatus, ERROR_MESSAGES } from '../constants';

export const getErrorMessage = (error: AxiosError<ApiErrorResponse>): string => {
  if (!error.response) {
    return 'Network error. Please check your connection.';
  }

  const { status, data } = error.response;
  return (
    data?.message || ERROR_MESSAGES[status as HttpStatus] || ERROR_MESSAGES[HttpStatus.ServerError]
  );
};
