import axiosInstance from './axiosInstance';
import { setupResponseInterceptor, setupRequestInterceptor } from './interceptors';

setupRequestInterceptor(axiosInstance);
setupResponseInterceptor(axiosInstance);

export default axiosInstance;
