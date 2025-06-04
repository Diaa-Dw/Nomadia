import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { showErrorToast } from '../../utils';
import { ApiErrorResponse } from '../types';
import { getErrorMessage } from '../utils';

const setupResponseInterceptor = (instance: AxiosInstance): void => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError<ApiErrorResponse>) => {
      showErrorToast(getErrorMessage(error));
      return Promise.reject(error);
    }
  );
};

export default setupResponseInterceptor;
