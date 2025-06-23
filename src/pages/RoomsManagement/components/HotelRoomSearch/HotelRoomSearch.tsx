import { Form, FormikProvider } from 'formik';
import { useHotelRoomsForm } from '../../hooks';
import { HotelRoomsSearchProps } from '../../types';
import { HotelSelect } from '../HotelSelect';
import { DatePicker } from '@/features/search/components/DatePicker';
import { Button, Stack } from '@mui/material';

const RoomsSearchForm = ({ onSearch }: HotelRoomsSearchProps) => {
  const formikProps = useHotelRoomsForm({ onSearch });
  return (
    <FormikProvider value={formikProps}>
      <Form>
        <Stack direction={'row'} alignItems={'center'}>
          <HotelSelect name="hotelId" />

          <DatePicker />
          <Button type="submit" variant={'outlined'}>
            Show Rooms
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default RoomsSearchForm;
