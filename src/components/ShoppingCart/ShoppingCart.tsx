import { selectCart } from '@/features';
import { useAppSelector } from '@/store';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { StyledBadge } from './ShoppingCart.style';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { totalItems } = useAppSelector(selectCart);

  const onShoppingIconClick = () => {
    navigate('/cart');
  };

  return (
    <IconButton aria-label="cart" onClick={onShoppingIconClick}>
      <StyledBadge badgeContent={totalItems} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default ShoppingCart;
