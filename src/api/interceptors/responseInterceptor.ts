import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { showErrorToast } from '@/utils';
import { ApiErrorResponse } from '../types';
import { getErrorMessage } from '../utils';
import { HttpStatus } from '../constants';

let hasShownToast = false;

const setupResponseInterceptor = (instance: AxiosInstance): void => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError<ApiErrorResponse>) => {
      if (!hasShownToast) {
        showErrorToast(getErrorMessage(error));
        hasShownToast = true;
      }

      if (error.response?.status === HttpStatus.Forbidden) {
        window.location.href = '/access-denied';
      }

      return Promise.reject(error);
    }
  );
};

export default setupResponseInterceptor;
