import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Stack, Typography } from '@mui/material';
import { EmptyStateProps } from './EmptyState.types';

const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <Stack
      height="calc(100vh - 64px)"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      textAlign="center"
      px={2}
    >
      <DotLottieReact
        src="https://lottie.host/7750f792-6e2c-4435-9ab0-b0a65b982049/A0hFRvJp8I.lottie"
        loop={false}
        autoplay
        style={{ height: '200px', width: '200px' }}
      />

      <Typography variant="h6" color="text.secondary">
        {title}
        <br />
        {description}
      </Typography>
    </Stack>
  );
};

export default EmptyState;
