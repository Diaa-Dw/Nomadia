import { styled } from '@mui/material/styles';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export const StyledDateRangePicker = styled(DateRangePicker)(({ theme }) => ({
  '& .rdrCalendarWrapper, .rdrDefinedRangesWrapper, .rdrDateDisplayWrapper, .rdrStaticRange': {
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
  },

  '& .rdrDefinedRangesWrapper': {
    borderRadius: 0,
    borderRight: `1px solid ${theme.palette.primary.main} !important`,
  },
  '& .rdrStaticRange': {
    borderRadius: 0,
    borderBottom: `1px solid ${theme.palette.primary.main} !important`,
  },
  '& .rdrStaticRange:hover span': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
  },

  '& .rdrDateInput': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    '& input': {
      color: theme.palette.text.primary,
    },
  },

  '& .rdrDayNumber span': {
    color: theme.palette.text.primary,
  },
  '& .rdrDayDisabled': {
    backgroundColor: theme.palette.background.paper,
  },
  '& .rdrInRange, & .rdrStartEdge, & .rdrEndEdge': {
    backgroundColor: theme.palette.primary.main,
  },

  [theme.breakpoints.down('sm')]: {
    '& .rdrDefinedRangesWrapper': {
      display: 'none',
    },
  },
}));
