import { EmptyState, RoomCard } from '@/components';
import { selectCart } from '@/features';
import { useAppSelector } from '@/store';
import { Container, Stack, Typography } from '@mui/material';

const Cart = () => {
  const { items, totalItems } = useAppSelector(selectCart);

  const isEmpty = totalItems === 0;

  if (isEmpty)
    return (
      <EmptyState
        title={'Your cart is empty.'}
        description={'Please add rooms to the cart to checkout.'}
      />
    );

  return (
    <Container maxWidth="xl">
      <Stack gap={3}>
        <Typography variant="h3" align="center" gutterBottom>
          Choose a room to checkout
        </Typography>

        <Stack direction={'row'}>
          {items.map(item => (
            <RoomCard room={item} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Cart;
