import { Box, styled } from '@mui/material';
import { Form } from 'formik';
import { StyledFormProps } from './Search.type';

export const StyledForm = styled(Form, {
  shouldForwardProp: prop => prop !== 'isSearchPage',
})<StyledFormProps>(({ isSearchPage }) => {
  console.log('🚀 ~ isSearchPage:', isSearchPage);

  return {
    position: 'relative',
    display: 'flex',
    justifyContent: isSearchPage ? 'flex-start' : 'center',
    paddingInline: '1rem',
    margin: isSearchPage ? '0px auto' : '-60px 0 30px 0 ',
    zIndex: 1000,

    '@media (max-width: 1018px)': {
      justifyContent: 'center',
      margin: isSearchPage ? '0 auto' : '0px ',
    },
  };
});

export const SearchFieldsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.5rem',
  padding: '0.5rem 0.6rem',
  columnGap: '0.75rem',
  rowGap: '0.5rem',
  backgroundColor: theme.palette.background.paper,

  '@media (max-width: 1018px)': {
    width: '100%',
    maxWidth: '520px',
    alignItems: 'stretch',
    flexDirection: 'column',
    rowGap: '0.75rem',
    columnGap: 0,
  },
}));
