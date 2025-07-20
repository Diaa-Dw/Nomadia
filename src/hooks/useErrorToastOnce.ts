import { showErrorToast } from '@/utils';
import { useEffect, useRef } from 'react';

const useErrorToastOnce = (error: unknown, message = 'Something went wrong.') => {
  const hasShownError = useRef(false);

  useEffect(() => {
    if (error && !hasShownError.current) {
      showErrorToast(message);
      hasShownError.current = true;
    }
  }, [error, message]);
};

export default useErrorToastOnce;
