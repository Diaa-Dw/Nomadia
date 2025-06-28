import { Button } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import {
  Actions,
  Container,
  Content,
  ErrorDetails,
  ErrorText,
  ErrorTitle,
  Message,
  StackTrace,
  Title,
} from './ErrorFallback.styles';

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>Oops! Something went wrong</Title>

        <Message>
          We're sorry, but something unexpected happened. Our team has been notified and is working
          to fix the issue.
        </Message>

        {process.env.NODE_ENV === 'development' && (
          <ErrorDetails>
            <ErrorTitle>Error Details (Development):</ErrorTitle>
            <ErrorText>{error.message}</ErrorText>
            <StackTrace>{error.stack}</StackTrace>
          </ErrorDetails>
        )}

        <Actions>
          <Button variant="contained" onClick={resetErrorBoundary}>
            Try Again
          </Button>

          <Button variant="outlined" onClick={() => navigate('/', { replace: true })}>
            Go to Home
          </Button>
        </Actions>
      </Content>
    </Container>
  );
};

export default ErrorFallback;
