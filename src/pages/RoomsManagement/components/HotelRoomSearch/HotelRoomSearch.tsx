import { DatePicker } from '@/features/search/components/DatePicker';
import { Box, Button, Divider, useMediaQuery } from '@mui/material';
import { FormikProvider } from 'formik';
import { useHotelRoomsForm } from '../../hooks';
import { HotelRoomsSearchProps } from '../../types';
import { HotelSelect } from '../HotelSelect';
import { SearchContainer } from './HotelRoomsSearch.styles';

const RoomsSearchForm = ({ onSearch }: HotelRoomsSearchProps) => {
  const formikProps = useHotelRoomsForm({ onSearch });
  const isSmallScreen = useMediaQuery('(min-width:900px)');

  return (
    <FormikProvider value={formikProps}>
      <SearchContainer>
        <Box>
          <HotelSelect name="hotelId" />
        </Box>

        <Divider variant="middle" orientation={isSmallScreen ? 'horizontal' : 'vertical'} />

        <Box>
          <DatePicker />
        </Box>

        <Divider variant="middle" orientation={isSmallScreen ? 'horizontal' : 'vertical'} />

        <Box>
          <Button type="submit" variant="outlined" fullWidth>
            Show Rooms
          </Button>
        </Box>
      </SearchContainer>
    </FormikProvider>
  );
};

export default RoomsSearchForm;
