import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Stack, Typography } from '@mui/material';
import React from 'react';

const NoResults: React.FC = () => {
  return (
    <Stack alignItems={'center'}>
      <DotLottieReact
        src="https://lottie.host/7750f792-6e2c-4435-9ab0-b0a65b982049/A0hFRvJp8I.lottie"
        loop={false}
        autoplay
        style={{ height: '200px', width: '200px' }}
      />

      <Typography variant="h6" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
        No results found.
      </Typography>
    </Stack>
  );
};

export default NoResults;
