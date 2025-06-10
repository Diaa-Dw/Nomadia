import { Typography } from '@mui/material';
import { Container, ContentContainer, Overlay } from './HeroBanner.style';

const HeroBanner = () => {
  return (
    <Container>
      <Overlay />
      <ContentContainer maxWidth="lg">
        <Typography variant="h2" fontWeight={700}>
          Book your stay with Nomadia
        </Typography>
        <Typography variant={'subtitle1'} mb={4}>
          1,480,086 rooms around the world are waiting for you!
        </Typography>
      </ContentContainer>
    </Container>
  );
};

export default HeroBanner;
