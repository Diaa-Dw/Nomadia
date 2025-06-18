import { EmptyState } from '@/components';
import { selectCart } from '@/features';
import { useAppSelector } from '@/store';
import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { replace, useNavigate, useParams } from 'react-router-dom';
import { CheckoutRoomCard } from './components';
import { isCartItemValid, showErrorToast } from '@/utils';

const Checkout = () => {
  const { roomId: paramsId } = useParams();
  const navigate = useNavigate();
  const { items } = useAppSelector(selectCart);

  const roomId = parseInt(paramsId ?? '-1');
  const room = items.find(item => item.roomId === roomId);

  useEffect(() => {
    if (!room) return;

    const isInvalid = !isCartItemValid(room);
    if (isInvalid) {
      showErrorToast('The booking dates for this room are no longer valid.');
      navigate('/me/cart', { replace: true });
    }
  }, [room, navigate]);

  if (!room) {
    return <EmptyState title="Room not found in cart." description="" />;
  }

  return (
    <Container maxWidth="xl">
      <CheckoutRoomCard room={room} />
    </Container>
  );
};

export default Checkout;
