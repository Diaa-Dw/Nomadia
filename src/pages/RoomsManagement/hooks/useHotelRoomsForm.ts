import { formatDate } from '@/utils';
import { useFormik } from 'formik';
import { INITIAL_VALUES } from '../constants';
import { searchRoomvalidationSchema } from '../schema';
import { HotelRoomsSearchProps, SearchFormPayload } from '../types';

const useHotelRoomsForm = ({ onSearch }: HotelRoomsSearchProps) => {
  const onSubmit = (values: SearchFormPayload) => {
    const { hotelId, dateRange } = values;

    const formatedValues = {
      hotelId: hotelId as number,
      checkInDate: formatDate(dateRange.checkInDate),
      checkOutDate: formatDate(dateRange.checkOutDate),
    };
    onSearch(formatedValues);
  };
  const formikProps = useFormik<SearchFormPayload>({
    initialValues: INITIAL_VALUES,
    validationSchema: searchRoomvalidationSchema,
    onSubmit,
  });

  return formikProps;
};

export default useHotelRoomsForm;
