import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Container, ContentBox } from './Unauthenticated.style';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Unauthenticated = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContentBox>
        <DotLottieReact
          src="https://lottie.host/74372ff9-70b8-43f4-9572-9ae4b1679b2c/2onKAWgaUW.lottie"
          loop={false}
          autoplay
          style={{ width: '350px' }}
        />
        <Box textAlign={'center'}>
          <Typography component={'h2'} variant={'h2'} color={'primary'}>
            401 Unauthorized
          </Typography>

          <Typography variant="body2" color="text.secondary">
            You must be logged in to access this page. Please sign in to continue.
          </Typography>
        </Box>

        <Button variant={'contained'} onClick={() => navigate('/login')}>
          Login to Continue
        </Button>
      </ContentBox>
    </Container>
  );
};

export default Unauthenticated;
