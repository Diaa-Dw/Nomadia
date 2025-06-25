import { login, logout } from '@/features';
import { LoginPayload } from '@/features/user/types';
import { useAppDispatch } from '@/store';
import { getAuthToken, isTokenExpired, parseJwtToLoginPayload } from '@/utils';
import { useEffect, useState } from 'react';

const useVerifyToken = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      const token = getAuthToken();

      if (!token) {
        dispatch(logout());
        setIsAuthenticating(false);
        return;
      }

      const tokenPayload = parseJwtToLoginPayload(token) as LoginPayload;

      if (isTokenExpired(tokenPayload?.expirationDate)) {
        dispatch(logout());
        setIsAuthenticating(false);
        return;
      }

      dispatch(login(tokenPayload));
      setIsAuthenticating(false);
    };

    verifyToken();
  }, [dispatch]);

  return { isAuthenticating };
};

export default useVerifyToken;
