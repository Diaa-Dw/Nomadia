import { Avatar as MuiAvatar, CardContent as MuiCardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Avatar = styled(MuiAvatar)(({ theme }) => ({
  color: theme.vars?.palette.text.primary,
  backgroundColor: theme.palette.primary.main,
}));

export const CardContent = styled(MuiCardContent)(() => ({
  paddingBottom: '0px !important',
  padding: '5px 0',

  '& > button': {
    justifyContent: 'flex-start',
    '&:hover': { color: 'text.primary' },
    fontWeight: 500,
  },
}));
