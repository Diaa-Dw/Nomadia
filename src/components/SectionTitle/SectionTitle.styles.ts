import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  fontWeight: 'bold',
  paddingLeft: theme.spacing(4),
  marginBottom: theme.spacing(4),
  color: theme.palette.text.primary,

  '&::before': {
    content: '"\u25B6"',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.palette.primary.main,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -6,
    width: '100%',
    height: '4px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: 2,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.4s ease',
  },

  '&:hover::after': {
    transform: 'scaleX(1)',
  },
}));
