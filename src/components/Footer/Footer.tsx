import { FavoriteRounded } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { AuthorCredit, RoomCardContainer } from './Footer.styles';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <RoomCardContainer>
      <Typography variant="h4" color={'primary'} fontWeight={600}>
        Nomadia
      </Typography>
      <Typography variant={'body1'} color={'textSecondary'}>
        Your favorite hotel booking experience since 1997
      </Typography>
      <AuthorCredit variant="body2" color={'textSecondary'}>
        Made with <FavoriteRounded color={'error'} />
        <Link to="https://diaa-dwikat.netlify.app" target="_blank" rel="noopener noreferrer">
          Diaa Dwikat
        </Link>
      </AuthorCredit>
    </RoomCardContainer>
  );
};

export default Footer;
