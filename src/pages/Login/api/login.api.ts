import axios from '@/api';
import { LoginRequest, LoginResponse } from './login.types';

const loginUser = async (payload: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>('/auth/authenticate', payload);

  return response.data;
};

export default loginUser;
