import { Box, Container as MuiContainer, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(MuiContainer)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const Content = styled(Box)(() => ({
  textAlign: 'center',
  maxWidth: 600,
  margin: '0 auto',
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.error.main,
  fontWeight: 'bold',
}));

export const Message = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

export const ErrorDetails = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[300]}`,
  textAlign: 'left',
}));

export const ErrorTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.error.main,
  fontWeight: 'bold',
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.error.main,
  fontSize: '0.875rem',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
}));

export const StackTrace = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  maxHeight: 200,
  overflow: 'auto',
}));

export const Actions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'center',
  flexWrap: 'wrap',
}));
