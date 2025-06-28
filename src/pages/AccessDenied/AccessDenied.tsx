import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Container, ContentBox } from './AccessDenied.style';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccessDenied = () => {
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
            403 Access Denied
          </Typography>

          <Typography variant="body2" color="text.secondary">
            You don't have permission to access this page. Please contact your administrator if you
            believe this is an error.
          </Typography>
        </Box>

        <Button variant={'contained'} onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </ContentBox>
    </Container>
  );
};

export default AccessDenied;
