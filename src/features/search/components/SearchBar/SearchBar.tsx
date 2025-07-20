import { TextField } from '@/components';
import { LocationCityOutlined, Search } from '@mui/icons-material';
import { Button, CircularProgress, Divider, useMediaQuery } from '@mui/material';
import { FormikProvider } from 'formik';
import { useSearchForm } from '../../hooks';
import DatePicker from '../DatePicker/DatePicker';
import { FieldContainer } from '../FieldContainer';
import { GuestRoomDropdown } from '../GuestRoomDropdown';
import { SearchFieldsWrapper, StyledForm } from './SearchBar.style';
import { useLocation } from 'react-router-dom';
import { SearchBarProps } from './Search.type';
import { SortDropdown } from '../SortDropdown';

const SearchBar = ({ isPending }: SearchBarProps) => {
  const { pathname } = useLocation();
  const { formikProps } = useSearchForm();
  const isSmallScreen = useMediaQuery('(max-width:1018px)');

  const isSearchPage = pathname === '/search';

  const { isValid, dirty } = formikProps;

  return (
    <FormikProvider value={formikProps}>
      <StyledForm isSearchPage={isSearchPage} autoComplete="off">
        <SearchFieldsWrapper>
          <FieldContainer icon={<LocationCityOutlined />}>
            <TextField name="city" placeholder="Where are you going..." />
          </FieldContainer>

          <Divider variant={'middle'} orientation={isSmallScreen ? 'horizontal' : 'vertical'} />

          <DatePicker />

          <Divider variant={'middle'} orientation={isSmallScreen ? 'horizontal' : 'vertical'} />

          <GuestRoomDropdown />
          <Divider variant={'middle'} orientation={isSmallScreen ? 'horizontal' : 'vertical'} />

          <SortDropdown />
          <Divider variant={'middle'} orientation={isSmallScreen ? 'horizontal' : 'vertical'} />

          <Button
            type="submit"
            variant="contained"
            disabled={!dirty || !isValid || isPending}
            startIcon={isPending ? <CircularProgress size={20} /> : <Search />}
          >
            {isPending ? '' : 'Search'}
          </Button>
        </SearchFieldsWrapper>
      </StyledForm>
    </FormikProvider>
  );
};

export default SearchBar;
