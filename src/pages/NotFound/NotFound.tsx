import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container, ContentBox } from './NotFound.style';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContentBox>
        <DotLottieReact
          src="https://lottie.host/d1339f30-0c8a-4c67-9746-2bd690b5a5ce/kM6DWppNiM.lottie"
          loop
          autoplay
          style={{ width: '350px' }}
        />

        <Box textAlign="center">
          <Typography component="h2" variant="h2" color="primary">
            404 Not Found
          </Typography>

          <Typography variant="body2" color="text.secondary">
            The page you are looking for doesn't exist or has been moved.
          </Typography>
        </Box>

        <Button variant="contained" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </ContentBox>
    </Container>
  );
};

export default NotFoundPage;
