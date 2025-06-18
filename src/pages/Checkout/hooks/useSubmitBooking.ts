import { showErrorToast, showSuccessToast } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { BookRequest, BookResponse } from '../types';
import { submitBookingRequest } from '../API';
import { useAppDispatch } from '@/store';
import { removeFromCart } from '@/features';

const useSubmitBooking = (roomId: number) => {
  const hasShownError = useRef(false);
  const dipatch = useAppDispatch();

  const {
    mutate: submitBooking,
    isPending,
    error,
  } = useMutation<BookResponse, unknown, BookRequest>({
    mutationFn: submitBookingRequest,
    onSuccess: response => {
      showSuccessToast('Booking completed successfully.');

      sessionStorage.setItem(`bookingResponse${roomId}`, JSON.stringify(response));
      dipatch(removeFromCart(roomId));
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
