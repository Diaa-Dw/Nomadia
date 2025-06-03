import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getAuthToken } from '../../utils';

const setupRequestInterceptor = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getAuthToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    error => Promise.reject(error)
  );
};

export default setupRequestInterceptor;
