import { EmptyState } from '@/components';
import { selectCart } from '@/features';
import { useAppSelector } from '@/store';
import { isCartItemValid, showErrorToast } from '@/utils';
import { Container } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckoutContainer } from './Checkout.style';
import { CheckoutRoomCard } from './components';
import { CheckoutForm } from './components/CheckoutForm';
import { BookResponse } from './types';
import BookingConfirmationDetails from './components/BookingConfirmationDetails/BookingConfirmationDetails';

const Checkout = () => {
  const navigate = useNavigate();
  const { roomId: paramsId } = useParams();

  const roomId = useMemo(() => parseInt(paramsId ?? '-1', 10), [paramsId]);
  const { items } = useAppSelector(selectCart);
  const room = useMemo(() => items.find(item => item.roomId === roomId), [items, roomId]);

  const sessionKey = `bookingResponse${roomId}`;
  const bookingResponseRaw = sessionStorage.getItem(sessionKey);

  useEffect(() => {
    if (!room) return;

    const invalid = !isCartItemValid(room);
    if (invalid) {
      showErrorToast('The booking dates for this room are no longer valid.');
      navigate('/me/cart', { replace: true });
    }
  }, [room, navigate]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(sessionKey);
    };
  }, [sessionKey]);

  if (!bookingResponseRaw || !room) {
    return <EmptyState title="Room not found in cart." description="" />;
  }

  if (bookingResponseRaw) {
    let parsedResponse: BookResponse | null = null;

    try {
      parsedResponse = JSON.parse(bookingResponseRaw);
    } catch {
      sessionStorage.removeItem(sessionKey);
      return null;
    }

    return <BookingConfirmationDetails details={parsedResponse as BookResponse} />;
  }

  return (
    <Container maxWidth="xl">
      <CheckoutContainer>
        <CheckoutRoomCard room={room} />
        <CheckoutForm room={room} />
      </CheckoutContainer>
    </Container>
  );
};

export default Checkout;
