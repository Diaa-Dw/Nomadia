import { showErrorToast, showSuccessToast } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { BookRequest, BookResponse } from '../types';
import { submitBookingRequest } from '../API';

const useSubmitBooking = () => {
  const hasShownError = useRef(false);

  const {
    mutateAsync: submitBooking,
    isPending,
    error,
  } = useMutation<BookResponse, unknown, BookRequest>({
    mutationFn: submitBookingRequest,
    onSuccess: () => {
      showSuccessToast('Booking completed successfully.');
    },
    onError: error => {
      console.error('Booking submission failed:', error);
      showErrorToast('Failed to complete booking. Please try again.');
    },
  });

  useEffect(() => {
    if (error && !hasShownError.current) {
      showErrorToast('Failed to load hotel data.');
      hasShownError.current = true;
    }
  }, [error]);

  return { submitBooking, isPending };
};

export default useSubmitBooking;
