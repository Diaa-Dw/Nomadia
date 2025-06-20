import { removeFromCart } from '@/features';
import { useErrorToastOnce } from '@/hooks';
import { useAppDispatch } from '@/store';
import { showErrorToast, showSuccessToast } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { submitBookingRequest } from '../API';
import { BookRequest, BookResponse } from '../types';

const useSubmitBooking = (roomId: number) => {
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

  useErrorToastOnce(error, 'Failed to load hotel data.');

  return { submitBooking, isPending };
};

export default useSubmitBooking;
