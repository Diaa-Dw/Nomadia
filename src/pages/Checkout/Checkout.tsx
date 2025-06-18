import { EmptyState } from '@/components';
import { selectCart } from '@/features';
import { useAppSelector } from '@/store';
import { isCartItemValid, showErrorToast } from '@/utils';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckoutContainer } from './Checkout.style';
import { CheckoutRoomCard } from './components';
import { CheckoutForm } from './components/CheckoutForm';

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
      <CheckoutContainer>
        <CheckoutRoomCard room={room} />
        <CheckoutForm room={room} />
      </CheckoutContainer>
    </Container>
  );
};

export default Checkout;
