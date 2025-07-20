import { Button, Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
  gap: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
}));

export const CounterButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  minWidth: '2em',
  padding: 0,
  borderRadius: 0,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export const CounterContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  borderRadius: '4px',
  overflow: 'hidden',
  width: 'fit-content',

  '& > button:first-of-type': {
    borderRadius: '8px 0 0 8px',
  },
  '& > button:last-of-type': {
    borderRadius: '0 8px 8px 0',
  },
  '& > button:disabled': {
    backgroundColor: theme.palette.action.disabledBackground,
  },
}));

export const ReadOnlyCounterField = styled(TextField)({
  width: '40px',
  padding: '0px',
  borderRadius: '0px',
  userSelect: 'none',
  pointerEvents: 'none',

  '& .MuiInputBase-root': {
    borderRadius: '0px',
  },
  '& input': {
    textAlign: 'center',
    fontSize: '0.9rem',
    borderRadius: '0px',
  },
});
