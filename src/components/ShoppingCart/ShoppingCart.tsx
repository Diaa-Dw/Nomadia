import { selectCart } from '@/features';
import { useAppSelector } from '@/store';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { StyledBadge } from './ShoppingCart.style';

const ShoppingCart = () => {
  const { totalItems } = useAppSelector(selectCart);

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalItems} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default ShoppingCart;
